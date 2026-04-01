# 🚀 AI That Fixes Broken Docker Apps Automatically

### Run one command → Watch AI detect, fix, and redeploy your app

---

## ⚡ Try it in 10 seconds

```bash
git clone https://github.com/JTSanthosh0007/ai-docker-fixer.git
cd ai-docker-fixer/examples/1-port-mismatch
node ../../index.js
```

---

## 💥 What happens

```text
❌ Health Check Failed
[DETECTION] App listens on port 5000
[AI] Fixing Dockerfile...
✅ SUCCESS: Container responds correctly!
```

---

## 🎥 Demo (10 seconds)

<p align="center">
  <img src="demo.mp4" width="800"/>
</p>



---

## 🧠 What this does

Tengu is a **controlled AI execution loop** that:

* Detects why your Docker container failed
* Extracts real signals from logs
* Uses AI to generate a fix
* Validates the output (no blind trust)
* Applies the fix safely
* Re-deploys automatically

---

## ⚙️ How it works

```text
Run → Fail → Detect → Fix → Validate → Redeploy
```

---

## 🔑 Modes

### 🟢 Demo Mode (default)

* No setup required
* Uses mock AI
* Always works → perfect for testing

---

### 🔥 Real AI Mode (optional)

Add your API key:

```env
GEMINI_API_KEY=your_key_here
```

Now Tengu:

* Sends logs + Dockerfile to AI
* Generates a real fix
* Validates before applying
* Reverts if anything breaks

---

## 🔒 Scope (v0.1.0)

### ✅ Supported

* Node.js apps
* Simple Dockerfiles
* Port mismatch fixes
* Missing dependency fixes

### ❌ Not Supported

* Multi-stage Docker builds
* docker-compose setups
* Dynamic ports (env-based)
* Complex production systems

---

## 🛡️ Safety Features

* Strict output validation (no blind AI execution)
* Port verification from real logs
* Retry mechanism (2 attempts)
* Automatic rollback on failure
* Diff preview before applying changes

---

## 🧠 Why this exists

Most AI tools:

❌ Generate code blindly
❌ Break your environment

Tengu:

✅ Constrains AI
✅ Validates everything
✅ Applies only safe changes

---

## 🚀 Status

**v0.1.0 — Experimental**

This is an early-stage system focused on:

* Reliability
* Safety
* Controlled AI usage

---

## ⭐ If this helped you

Star the repo and try it on your broken Docker apps.
