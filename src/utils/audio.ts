let audioCtx: AudioContext | null = null;

const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

function playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1) {
  try {
    const ctx = initAudio();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.error("Audio play failed", e);
  }
}

export const playStartSound = () => {
  playTone(440, 'sine', 0.1, 0.1);
  setTimeout(() => playTone(554.37, 'sine', 0.2, 0.1), 100);
  setTimeout(() => playTone(659.25, 'sine', 0.4, 0.1), 200);
};

export const playClickSound = () => {
  playTone(800, 'sine', 0.05, 0.05);
};

export const playSubmitSound = () => {
  playTone(400, 'triangle', 0.1, 0.1);
  setTimeout(() => playTone(600, 'triangle', 0.2, 0.1), 100);
};

export const playErrorSound = () => {
  playTone(200, 'sawtooth', 0.2, 0.1);
  setTimeout(() => playTone(150, 'sawtooth', 0.4, 0.1), 150);
};

export const playSuccessSound = () => {
  playTone(523.25, 'sine', 0.1, 0.1); // C5
  setTimeout(() => playTone(659.25, 'sine', 0.1, 0.1), 100); // E5
  setTimeout(() => playTone(783.99, 'sine', 0.1, 0.1), 200); // G5
  setTimeout(() => playTone(1046.50, 'sine', 0.4, 0.1), 300); // C6
};
