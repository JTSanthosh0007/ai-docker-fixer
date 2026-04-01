# 🚀 AI That Fixes Broken Docker Apps Automatically

### Run one command → Watch it detect, fix, and redeploy your app

```bash
git clone https://github.com/JTSanthosh0007/ai-docker-fixer.git
cd ai-docker-fixer/examples/1-port-mismatch

# Run the autonomous loop
node ../../index.js
```

### The Output (Proof)
```text
❌ Health Check Failed
[DETECTION] App listens on port 5000. Verify Dockerfile EXPOSE matches.
[AI] Fixing Dockerfile...
✅ SUCCESS
```

### 10-Second Demo
> *(Drop your OBS recording here as `demo.gif`)*
![Demo of auto-fixing a Docker app](demo.gif)

---

## 🔒 Scope & Capabilities

Tengu v0.1.0 is built for precise, controlled execution rather than broad, chaotic generic AI.

✅ **Supported**:
- Node.js applications
- Simple `Dockerfile` deployments
- Port mismatch detection & automated patching
- Missing dependency detection & automated fixing

❌ **Not Supported (Yet)**:
- Complex multi-stage Docker builds
- Multi-container `docker-compose` networks setups
- Applications without clear explicit `stdout` port logs
- Environment-variable-based dynamic port bindings

---

## 🧠 Core Architecture: Real AI vs Guaranteed Demo

Tengu supports **two operation modes** out of the box so that *anyone* can test it instantly.

### 🟢 1. Viral Demo Mode (Default)
If you run Tengu without an API key, it falls back to a **guaranteed mock**. 
- It simulates the intelligent reasoning without burning API tokens.
- **Why?** It ensures this repository works 100% of the time as a frictionless local proof-of-concept.

### 🔥 2. Real AI Mode (Experimental)
To use actual generative problem-solving, just inject your API key:
1. Create a `.env` file in the root directory.
2. Add `GEMINI_API_KEY=your_key_here`.

When Tengu detects this key:
1. It uses Google's `gemini-2.5-flash` model.
2. It sends your specific Dockerfile, your crash logs, and the detection state.
3. It forces the output format, parses it strictly, and applies the physical change.
4. If the AI hallucinates bad syntax or the new deployment fails again, Tengu safely reverts your `Dockerfile` to its original state and halts the loop.

*You didn’t just build an AI tool. You built a system that safely controls AI.*
