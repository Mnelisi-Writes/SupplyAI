// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhl3-9qFPhZgoFXedbNuMknCB3MjSsqQQ",
  authDomain: "ai-supply-chain-dashboard.firebaseapp.com",
  projectId: "ai-supply-chain-dashboard",
  storageBucket: "ai-supply-chain-dashboard.appspot.com",
  messagingSenderId: "510392158097",
  appId: "1:510392158097:web:576235c4d1773c28007c30",
  measurementId: "G-B5K4B0HH8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let isConnected = false;

setTimeout(() => {
                isConnected = true;
                updateConnectionStatus();
                loadSupplyChainData();
            }, 2000)

async function initializeFirebase() {
  try {
    // Test connection by getting a document
    await setDoc(doc(db, "connection_test", "test"), { timestamp: new Date() });
    isConnected = true;
    updateConnectionStatus();
    loadSupplyChainData();
  } catch (error) {
    console.error("Firebase connection failed:", error);
    isConnected = false;
    updateConnectionStatus();
  }
}

async function seedFirestoreData() {
  try {
    // Add metrics
    await setDoc(doc(db, "metrics", "overview"), {
      costSavings: 2.4,
      efficiency: 94.7,
      inventoryOptimization: 87.3,  // Fixed typo here
      riskScore: "Low",
      lastUpdated: new Date()
    });

    // Add performance trends
    await setDoc(doc(db, "performance", "monthly_trends"), {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      efficiency: [82, 85, 88, 87, 91, 94.7],
      cost: [2.8, 2.6, 2.5, 2.4, 2.3, 2.4],
      satisfaction: [88, 89, 92, 94, 96, 97]
    });

    // Add locations
    const locations = [
      { name: "New York DC", inventory: 85, demand: 1200, leadTime: "2-3 days", status: "Optimal" },
      { name: "Los Angeles DC", inventory: 72, demand: 980, leadTime: "3-4 days", status: "Warning" },
      { name: "Chicago DC", inventory: 91, demand: 1450, leadTime: "1-2 days", status: "Optimal" },
      { name: "Atlanta DC", inventory: 68, demand: 1100, leadTime: "2-3 days", status: "Critical" },
      { name: "Seattle DC", inventory: 88, demand: 750, leadTime: "2-3 days", status: "Optimal" }
    ];

    for (const loc of locations) {
      const docId = loc.name.toLowerCase().replace(/\s+/g, "_");
      await setDoc(doc(db, "locations", docId), loc);
    }

    console.log("Firestore data seeded successfully!");
  } catch (error) {
    console.error("Error seeding Firestore data:", error);
  }
}

function updateConnectionStatus() {
  const statusElement = document.getElementById('connectionStatus');
  const textElement = document.getElementById('connectionText');
  
  if (isConnected) {
    statusElement.classList.add('connected');
    statusElement.classList.remove('disconnected');
    textElement.textContent = 'Connected';
  } else {
    statusElement.classList.add('disconnected');
    statusElement.classList.remove('connected');
    textElement.textContent = 'Disconnected';
  }
}

// Initialize Firebase when the app loads
initializeFirebase();

// Uncomment to seed data (run once then comment out)
seedFirestoreData().catch(console.error);

// Export for use in other files
export { db, isConnected };
// Add this at the bottom of firebase-config.js
export const supplyChainData = {
  performance: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    efficiency: [82, 85, 88, 87, 91, 94.7],
    cost: [2.8, 2.6, 2.5, 2.4, 2.3, 2.4],
    satisfaction: [88, 89, 92, 94, 96, 97]
  },
  locations: [
    { name: "New York DC", inventory: 85, demand: 1200, leadTime: "2-3 days", status: "Optimal" },
    { name: "Los Angeles DC", inventory: 72, demand: 980, leadTime: "3-4 days", status: "Warning" },
    { name: "Chicago DC", inventory: 91, demand: 1450, leadTime: "1-2 days", status: "Optimal" },
    { name: "Atlanta DC", inventory: 68, demand: 1100, leadTime: "2-3 days", status: "Critical" },
    { name: "Seattle DC", inventory: 88, demand: 750, leadTime: "2-3 days", status: "Optimal" }
  ]
};