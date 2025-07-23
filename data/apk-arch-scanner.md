---
title: "APK Arch Scanner – Quickly Detect Native Architectures in APKs"
slug: "apk-arch-scanner"
date: "2025-07-23"
featuredImage: "/apk-arch.png" # Replace with actual image if available
tags:
  - apk
  - reverse engineering
  - android
  - owasp
  - architecture
  - ministry
---

![APK Arch Scanner](/apk-arch.png)

### Fast & Simple APK Architecture Scanning for Security Analysts

During our ongoing work on a broader reverse engineering and mobile app security project — particularly analyzing apps like **PicCanary** — we faced a recurring need: quickly identifying the native architectures included in APK files.

As a response to that, we developed [**APK Arch Scanner**](https://apk-arch-scanner.vercel.app/) — a minimalistic web tool that lets you **upload any APK file** and instantly see which native architectures (`armeabi-v7a`, `arm64-v8a`, `x86`, `x86_64`, etc.) are present in the `lib/` directory.

---

### 🔍 Why We Built This

Our research team is working on a project that involves **static and dynamic analysis of Android applications**, including identifying attack surfaces, reverse engineering, and validating against **OWASP MASVS** (Mobile Application Security Verification Standard).

In practice, knowing the native architectures of an APK is critical for:

- 🧪 Setting up the correct emulators or physical devices for dynamic testing
- 🔐 Identifying potential vulnerabilities in native libraries (e.g. via Ghidra or Frida)
- 🔍 Filtering apps that include unnecessary native code (attack surface reduction)
- 📦 Validating if multiple ABI targets are bloating the APK unnecessarily

---

### ⚙️ How It Works

The scanner uses a client-based uploader to push the APK to a backend that extracts the `lib/` folder contents. It lists all ABI directories (e.g. `lib/armeabi-v7a/`, `lib/arm64-v8a/`, etc.) found inside the APK, without exposing or storing any sensitive data. The goal is speed, simplicity, and reliability.

---

### 🛡️ Part of a Bigger Ecosystem

This tool is just one part of a larger ecosystem we’re building for **automated Android app analysis**, including:

- ✅ Verifying secure configuration against **OWASP MASTG**
- 📥 APK decompilation and manifest parsing
- 🔑 Certificate validation and expiration detection
- 📊 Privacy and permission auditing

Our focus on **PicCanary** and other applications is driving the creation of utilities like this to **accelerate manual testing workflows** and support our internal pipeline.

---

### 🚀 Try It Yourself

👉 [apk-arch-scanner.vercel.app](https://apk-arch-scanner.vercel.app/)

Upload any `.apk` file and within seconds see which architectures it supports — no installation, no accounts, and fully free to use.

---

### 💡 Open to Feedback

We built this tool out of necessity, but we're always looking for ways to improve it. If you're working in mobile app security, feel free to reach out with ideas or suggestions!
