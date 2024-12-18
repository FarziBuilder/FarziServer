# FarziServer

**Locally host and share your files with other devices through WiFi.**

---

## **Setup Instructions**

### 1. Initialize Express Server
Run the following commands in your project directory:

```bash
npm init -y
npm install express
```


### **Folder Structure**

Place the files you want to share in a folder named `photos` in your project root directory:
```
/project-folder/
    server.js
    /photos/
        file1.png
        file2.pdf
        ...
```

### **Allow Firewall Rules**

1. **Open Port 8080** for inbound connections using Windows Defender Firewall.
2. **Allow ICMPv4/ICMPv6 connections** for network discovery.

---

