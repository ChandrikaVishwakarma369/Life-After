import React from "react";
import { Mic, MicOff, PhoneOff, Phone } from "lucide-react";

const FamilyMode = () => {
  const [micOn, setMicOn] = React.useState(true);
  const [callStarted, setCallStarted] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false); // AI speaking
  const [isListening, setIsListening] = React.useState(false); // User speaking

  const recognitionRef = React.useRef<any>(null);
  const synthRef = React.useRef<SpeechSynthesisUtterance | null>(null);

  // AI ke responses
  const aiResponses = [
    "I am always here for you, my family.",
    "It means so much to hear your voice.",
    "Tell me more, I am listening.",
    "I love you and I miss you deeply.",
    "You are never alone, I am always with you.",
  ];

  const speakAsAI = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 0.95;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsListening(false);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      // mic wapas start karo
      if (micOn && recognitionRef.current) {
        try { recognitionRef.current.start(); } catch (_) {}
      }
    };

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const startRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setIsSpeaking(false);
    };

    recognition.onresult = (event: any) => {
      setIsListening(false);
      const transcript = event.results[0][0].transcript;
      console.log("You said:", transcript);

      // AI random response dega
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setTimeout(() => speakAsAI(response), 600);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleStartCall = () => {
    setCallStarted(true);
    setTimeout(() => {
      speakAsAI("Hello! It's so wonderful to hear from you. How are you feeling today?");
    }, 800);
  };

  const handleEndCall = () => {
    window.speechSynthesis.cancel();
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    setCallStarted(false);
    setIsSpeaking(false);
    setIsListening(false);
  };

  const handleMicToggle = () => {
    if (micOn) {
      // mic band karo
      if (recognitionRef.current) recognitionRef.current.abort();
      setIsListening(false);
    } else {
      // mic chalu karo
      if (callStarted && !isSpeaking) startRecognition();
    }
    setMicOn(!micOn);
  };

  // AI baat khatam kare to mic auto start
  React.useEffect(() => {
    if (callStarted && !isSpeaking && micOn) {
      try { startRecognition(); } catch (_) {}
    }
  }, [isSpeaking, callStarted]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (recognitionRef.current) recognitionRef.current.abort();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F3FF] dark:bg-gray-900 flex flex-col items-center justify-center px-4">

      {/* Header */}
      <h1 className="text-4xl font-bold text-[#A78BFA] mb-2">Professional Mode</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-12 text-center">
        Talk with Dolly....
      </p>

      {/* Avatar Area */}
      <div className="relative flex flex-col items-center justify-center mb-12">

        {/* AI Speaking - purple pulse */}
        {callStarted && isSpeaking && (
          <>
            <div className="absolute w-52 h-52 rounded-full border-2 border-[#A78BFA] opacity-20 animate-ping" />
            <div className="absolute w-44 h-44 rounded-full border-2 border-[#A78BFA] opacity-30 animate-ping [animation-delay:300ms]" />
          </>
        )}

        {/* User Speaking - green pulse */}
        {callStarted && isListening && (
          <>
            <div className="absolute w-52 h-52 rounded-full border-2 border-green-400 opacity-20 animate-ping" />
            <div className="absolute w-44 h-44 rounded-full border-2 border-green-400 opacity-30 animate-ping [animation-delay:300ms]" />
          </>
        )}

        {/* Idle glow */}
        {callStarted && !isSpeaking && !isListening && (
          <div className="absolute w-44 h-44 rounded-full bg-[#A78BFA] opacity-10 animate-pulse" />
        )}

        {/* Avatar */}
        <div className={`w-36 h-36 rounded-full flex items-center justify-center text-6xl shadow-2xl transition-all duration-500 z-10
          ${callStarted
            ? "bg-gradient-to-br from-[#A78BFA] to-[#7c3aed] scale-110"
            : "bg-gray-200 dark:bg-gray-700 scale-100"
          }`}
        >
          👤
        </div>

        {/* Status + wave */}
        {callStarted && (
          <div className="mt-5 flex flex-col items-center gap-2 z-10">
            <p className="text-gray-700 dark:text-white font-semibold text-lg">AI Twin</p>

            {/* Sound wave bars */}
            <div className="flex items-end gap-1 h-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`w-1.5 rounded-full transition-all duration-300
                    ${isSpeaking ? "bg-[#A78BFA] animate-bounce"
                    : isListening ? "bg-green-400 animate-bounce"
                    : "bg-gray-300 dark:bg-gray-600"}`}
                  style={{
                    height: (isSpeaking || isListening) ? `${8 + (i % 3) * 8}px` : "4px",
                    animationDelay: `${i * 80}ms`,
                  }}
                />
              ))}
            </div>

            {/* Label */}
            <p className={`text-xs font-medium ${
              isSpeaking ? "text-[#A78BFA]"
              : isListening ? "text-green-400"
              : "text-gray-400"
            }`}>
              {isSpeaking ? "AI Twin is speaking..." 
              : isListening ? "Listening to you..." 
              : "..."}
            </p>
          </div>
        )}

        {!callStarted && (
          <p className="mt-5 text-gray-400 dark:text-gray-500 text-sm">Press Start call to connect</p>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-8">

        <button
          onClick={handleMicToggle}
          className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            micOn
              ? "bg-white dark:bg-gray-700 text-[#A78BFA]"
              : "bg-red-100 dark:bg-red-900 text-red-500"
          }`}
        >
          {micOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>

        {!callStarted ? (
          <button
            onClick={handleStartCall}
            className="flex items-center gap-2 bg-[#A78BFA] hover:bg-[#8b5cf6] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Phone size={22} />
            Start Call
          </button>
        ) : (
          <button
            onClick={handleEndCall}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105"
          >
            <PhoneOff size={22} />
            End Call
          </button>
        )}
      </div>

      {/* Status */}
      <p className="mt-8 text-sm text-gray-400 dark:text-gray-500 tracking-wide">
        {callStarted
          ? isSpeaking ? "🟣 AI Twin is speaking"
          : isListening ? "🟢 You are speaking"
          : "🔵 Connected"
          : "⚪ Ready to connect"}
      </p>

    </div>
  );
};

export default FamilyMode;