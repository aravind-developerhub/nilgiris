// Dashboard JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all dashboard components
  initializeAnimations();
  initializeChart();
  initializeInteractiveElements();
  initializeResponsiveHandlers();
  initializeCounters();
  initializeProgressBars();
  initializeTooltips();
  initializeSmoothScrolling();
});

// Animation System
function initializeAnimations() {
  // Fade in animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll(".bg-white").forEach((card) => {
    observer.observe(card);
  });

  // Sidebar animation
  const sidebarItems = document.querySelectorAll(".sidebar-nav-item");
  sidebarItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add("slide-in-left");
  });
}

// Chart Initialization
function initializeChart() {
  const canvas = document.getElementById("weeklyChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;

  canvas.width = width;
  canvas.height = height;

  // Chart data
  const data = [30, 25, 35, 45, 40, 50, 35, 55, 25, 40, 35, 25, 40, 15, 35];
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  drawChart(ctx, data, width, height);
  animateChart(ctx, data, width, height);
}

function drawChart(ctx, data, width, height) {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Create gradient for area fill
  const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
  gradient.addColorStop(0, "rgba(78, 166, 116, 0.3)");
  gradient.addColorStop(1, "rgba(78, 166, 116, 0)");

  // Calculate points
  const points = data.map((value, index) => ({
    x: padding + (index / (data.length - 1)) * chartWidth,
    y: height - padding - (value / 60) * chartHeight,
  }));

  // Draw area
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(points[0].x, height - padding);
  points.forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.lineTo(points[points.length - 1].x, height - padding);
  ctx.closePath();
  ctx.fill();

  // Draw line
  ctx.strokeStyle = "#4EA674";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.forEach((point) => ctx.lineTo(point.x, point.y));
  ctx.stroke();

  // Draw points
  points.forEach((point, index) => {
    ctx.fillStyle = "#C1E6BA";
    ctx.strokeStyle = "#4EA674";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Highlight Thursday (index 3)
    if (index === 3) {
      ctx.fillStyle = "#4EA674";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Add hover functionality
  addChartHover(ctx, points, data);
}

function animateChart(ctx, data, width, height) {
  let progress = 0;
  const duration = 1500;
  const startTime = Date.now();

  function animate() {
    const currentTime = Date.now();
    progress = Math.min((currentTime - startTime) / duration, 1);

    // Animate the chart drawing
    const animatedData = data.map((value) => value * progress);
    drawChart(ctx, animatedData, width, height);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

function addChartHover(ctx, points, data) {
  const canvas = ctx.canvas;
  let tooltip = null;

  canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find nearest point
    let nearestPoint = null;
    let minDistance = Infinity;

    points.forEach((point, index) => {
      const distance = Math.sqrt(
        Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2),
      );
      if (distance < 20 && distance < minDistance) {
        minDistance = distance;
        nearestPoint = { ...point, index, value: data[index] };
      }
    });

    if (nearestPoint) {
      showTooltip(e.clientX, e.clientY, nearestPoint.value);
      canvas.style.cursor = "pointer";
    } else {
      hideTooltip();
      canvas.style.cursor = "default";
    }
  });

  canvas.addEventListener("mouseleave", hideTooltip);

  function showTooltip(x, y, value) {
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "chart-tooltip";
      document.body.appendChild(tooltip);
    }

    tooltip.innerHTML = `<strong>${value}k</strong><br>Thursday`;
    tooltip.style.left = x + 10 + "px";
    tooltip.style.top = y - 40 + "px";
    tooltip.classList.add("active");
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove("active");
    }
  }
}

// Interactive Elements
function initializeInteractiveElements() {
  // Sidebar navigation
  const navItems = document.querySelectorAll(".sidebar-nav-item");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Search functionality
  const searchInput = document.querySelector('input[placeholder*="Search"]');
  if (searchInput) {
    searchInput.addEventListener("input", debounce(handleSearch, 300));
  }

  // Filter buttons
  const filterButtons = document.querySelectorAll(
    'button:contains("Filter"), .bg-green-600',
  );
  filterButtons.forEach((button) => {
    button.addEventListener("click", handleFilter);
  });

  // Details buttons
  const detailButtons = document.querySelectorAll(
    'button:contains("Details"), .border-primary-500',
  );
  detailButtons.forEach((button) => {
    button.addEventListener("click", handleDetails);
  });

  // Status dots animation
  const statusDots = document.querySelectorAll(".status-dot");
  statusDots.forEach((dot) => {
    if (dot.classList.contains("bg-success-500")) {
      dot.classList.add("animate");
    }
  });
}

// Responsive Handlers
function initializeResponsiveHandlers() {
  const mobileBreakpoint = 1024;
  const sidebar = document.querySelector(".fixed.left-0.top-24");
  const mainContent = document.querySelector(".flex-1.ml-64");

  // Create mobile menu toggle
  if (window.innerWidth <= mobileBreakpoint) {
    createMobileMenuToggle();
  }

  window.addEventListener("resize", debounce(handleResize, 250));

  function handleResize() {
    if (window.innerWidth <= mobileBreakpoint) {
      if (!document.querySelector(".mobile-menu-toggle")) {
        createMobileMenuToggle();
      }
    } else {
      const toggle = document.querySelector(".mobile-menu-toggle");
      if (toggle) {
        toggle.remove();
      }
      if (sidebar) {
        sidebar.style.transform = "";
      }
    }
  }

  function createMobileMenuToggle() {
    const header = document.querySelector(".fixed.top-0");
    if (!header) return;

    const toggle = document.createElement("button");
    toggle.className =
      "mobile-menu-toggle lg:hidden p-2 text-gray-600 hover:text-gray-800";
    toggle.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;

    header
      .querySelector(".flex")
      .insertBefore(toggle, header.querySelector("h1"));

    toggle.addEventListener("click", () => {
      if (sidebar) {
        sidebar.classList.toggle("open");
      }
    });
  }
}

// Counter Animation
function initializeCounters() {
  const counters = document.querySelectorAll(".text-2xl.font-bold");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element) {
  const text = element.textContent;
  const number = parseFloat(text.replace(/[^\d.]/g, ""));
  const suffix = text.replace(/[\d.]/g, "");

  if (isNaN(number)) return;

  let current = 0;
  const increment = number / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }

    let displayValue;
    if (number >= 1000) {
      displayValue = (current / 1000).toFixed(1) + "K";
    } else {
      displayValue = Math.floor(current).toString();
    }

    element.textContent = suffix + displayValue;
  }, 1000 / 60);
}

// Progress Bars Animation
function initializeProgressBars() {
  const progressBars = document.querySelectorAll(
    ".progress-bar, .bg-primary-500",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  progressBars.forEach((bar) => {
    if (
      bar.parentElement &&
      bar.parentElement.classList.contains("bg-primary-50")
    ) {
      observer.observe(bar);
    }
  });
}

function animateProgressBar(element) {
  const targetWidth = element.style.width || element.offsetWidth;
  element.style.width = "0";

  setTimeout(() => {
    element.style.width = targetWidth;
  }, 100);
}

// Tooltip System
function initializeTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]");

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", showTooltip);
    element.addEventListener("mouseleave", hideTooltip);
  });

  function showTooltip(e) {
    const text = e.target.getAttribute("data-tooltip");
    if (!text) return;

    const tooltip = document.createElement("div");
    tooltip.className =
      "absolute bg-gray-800 text-white text-xs rounded py-1 px-2 z-50 pointer-events-none";
    tooltip.textContent = text;
    tooltip.id = "tooltip";

    document.body.appendChild(tooltip);

    const rect = e.target.getBoundingClientRect();
    tooltip.style.left =
      rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px";
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + "px";
  }

  function hideTooltip() {
    const tooltip = document.getElementById("tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Utility Functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  console.log("Searching for:", query);
  // Implement search functionality here
}

function handleFilter(e) {
  console.log("Filter clicked");
  // Implement filter functionality here
}

function handleDetails(e) {
  console.log("Details clicked");
  // Implement details view functionality here
}

// Real-time Updates Simulation
function initializeRealTimeUpdates() {
  // Simulate real-time data updates
  setInterval(() => {
    updateRandomStatistic();
  }, 5000);
}

function updateRandomStatistic() {
  const stats = document.querySelectorAll(".text-2xl.font-bold");
  if (stats.length === 0) return;

  const randomStat = stats[Math.floor(Math.random() * stats.length)];
  const currentText = randomStat.textContent;
  const number = parseFloat(currentText.replace(/[^\d.]/g, ""));
  const prefix = currentText.substring(
    0,
    currentText.indexOf(number.toString()),
  );
  const suffix = currentText.substring(
    currentText.indexOf(number.toString()) + number.toString().length,
  );

  if (!isNaN(number)) {
    const change = (Math.random() - 0.5) * 0.1; // ±5% change
    const newNumber = Math.max(0, number * (1 + change));
    let displayValue;

    if (newNumber >= 1000) {
      displayValue = (newNumber / 1000).toFixed(1) + "K";
    } else {
      displayValue = Math.floor(newNumber).toString();
    }

    randomStat.textContent = prefix + displayValue + suffix;

    // Add visual feedback
    randomStat.classList.add("pulse-on-hover");
    setTimeout(() => {
      randomStat.classList.remove("pulse-on-hover");
    }, 500);
  }
}

// Data Export Functionality
function exportData(format = "csv") {
  const data = collectDashboardData();

  switch (format) {
    case "csv":
      downloadCSV(data);
      break;
    case "json":
      downloadJSON(data);
      break;
    default:
      console.log("Unsupported format");
  }
}

function collectDashboardData() {
  return {
    stats: {
      totalSales: "₹350K",
      totalOrders: "10.7K",
      pending: "509",
      canceled: "94",
    },
    timestamp: new Date().toISOString(),
  };
}

function downloadCSV(data) {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "dashboard-data.csv";
  a.click();
  window.URL.revokeObjectURL(url);
}

function downloadJSON(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "dashboard-data.json";
  a.click();
  window.URL.revokeObjectURL(url);
}

function convertToCSV(data) {
  const stats = data.stats;
  const headers = Object.keys(stats).join(",");
  const values = Object.values(stats).join(",");
  return headers + "\n" + values;
}

// Performance Monitoring
function initializePerformanceMonitoring() {
  // Monitor page load time
  window.addEventListener("load", () => {
    const loadTime =
      performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log("Page load time:", loadTime + "ms");
  });

  // Monitor chart rendering performance
  const chartStartTime = performance.now();
  requestAnimationFrame(() => {
    const chartEndTime = performance.now();
    console.log("Chart render time:", chartEndTime - chartStartTime + "ms");
  });
}

// Initialize performance monitoring
initializePerformanceMonitoring();

// Initialize real-time updates
initializeRealTimeUpdates();

// Error Handling
window.addEventListener("error", (e) => {
  console.error("Dashboard error:", e.error);
  // Implement error reporting here
});

// Service Worker Registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Accessibility enhancements
function initializeAccessibility() {
  // Add keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });

  // Add screen reader announcements for dynamic content
  function announceToScreenReader(message) {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }

  // Make announcements when stats update
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" || mutation.type === "characterData") {
        const target = mutation.target;
        if (target.classList && target.classList.contains("text-2xl")) {
          announceToScreenReader(`Statistic updated to ${target.textContent}`);
        }
      }
    });
  });

  document.querySelectorAll(".text-2xl.font-bold").forEach((element) => {
    observer.observe(element, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  });
}

// Initialize accessibility features
initializeAccessibility();

// Export functions for external use
window.dashboardAPI = {
  exportData,
  updateStatistic: updateRandomStatistic,
  refreshChart: initializeChart,
};


// Order Management Dashboard JavaScript

// Sample order data
const orderData = [
  {
    id: 1,
    orderId: "#ORD0001",
    product: {
      name: "Wireless Bluetooth Headphones",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a2253fd6d66911b8c69ffcbdb277bae165edcd04?width=60",
    },
    date: "01-01-2025",
    price: "49.99",
    payment: "paid",
    status: "delivered",
  },
  {
    id: 2,
    orderId: "#ORD0002",
    product: {
      name: "Men's T-Shirt",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f16dae36152a7970c575fa3b3b09d1b94a2e98f8?width=60",
    },
    date: "01-01-2025",
    price: "14.99",
    payment: "unpaid",
    status: "pending",
  },
  {
    id: 3,
    orderId: "#ORD0003",
    product: {
      name: "Men's Leather Wallet",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45c5ed5d071164aa81bab10ab99787e2b2bad281?width=60",
    },
    date: "01-01-2025",
    price: "49.99",
    payment: "paid",
    status: "delivered",
  },
  {
    id: 4,
    orderId: "#ORD0004",
    product: {
      name: "Memory Foam Pillow",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fc409f97755e11d8c5188aa6d94022a5289a4968?width=60",
    },
    date: "01-01-2025",
    price: "39.99",
    payment: "paid",
    status: "shipped",
  },
  {
    id: 5,
    orderId: "#ORD0005",
    product: {
      name: "Adjustable Dumbbells",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/da9943de6a50ac3a93056f53a63b58c62328e96f?width=60",
    },
    date: "01-01-2025",
    price: "14.99",
    payment: "unpaid",
    status: "pending",
  },
  {
    id: 6,
    orderId: "#ORD0006",
    product: {
      name: "Coffee Maker",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a0690d461ef9eca6c397c404456d8008ffb6f8c7?width=60",
    },
    date: "01-01-2025",
    price: "79.99",
    payment: "unpaid",
    status: "cancelled",
  },
  {
    id: 7,
    orderId: "#ORD0007",
    product: {
      name: "Casual Baseball Cap",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aed290175a795122a777ffa04320e360412c7f30?width=60",
    },
    date: "01-01-2025",
    price: "49.99",
    payment: "paid",
    status: "delivered",
  },
  {
    id: 8,
    orderId: "#ORD0008",
    product: {
      name: "Full HD Webcam",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/110b5e7393ccde991b66f7c6fee8ee716586adcc?width=60",
    },
    date: "01-01-2025",
    price: "39.99",
    payment: "paid",
    status: "delivered",
  },
  {
    id: 9,
    orderId: "#ORD0009",
    product: {
      name: "Smart LED Color Bulb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c04b833fe8357ee763f2faa27c5d46c8183a2b2e?width=60",
    },
    date: "01-01-2025",
    price: "79.99",
    payment: "unpaid",
    status: "delivered",
  },
  {
    id: 10,
    orderId: "#ORD0010",
    product: {
      name: "Men's T-Shirt",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f16dae36152a7970c575fa3b3b09d1b94a2e98f8?width=60",
    },
    date: "01-01-2025",
    price: "14.99",
    payment: "unpaid",
    status: "delivered",
  },
];

// Global state
let currentFilter = "all";
let currentPage = 1;
let itemsPerPage = 10;
let searchQuery = "";

// DOM elements
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");
const ordersTableBody = document.getElementById("ordersTableBody");
const statusTabs = document.querySelectorAll(".status-tab");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  renderOrdersTable();
  updateStatistics();
}

function setupEventListeners() {
  // Sidebar toggle
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", toggleSidebar);
  }

  // Status tab filters
  statusTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      const filters = ["all", "completed", "pending", "cancelled"];
      handleStatusFilter(filters[index]);
    });
  });

  // Search functionality
  const searchInputs = document.querySelectorAll(
    'input[placeholder*="Search"]',
  );
  searchInputs.forEach((input) => {
    input.addEventListener("input", handleSearch);
  });

  // Table row selection
  document.addEventListener("change", handleCheckboxChange);

  // Responsive sidebar for mobile
  window.addEventListener("resize", handleResize);
  handleResize(); // Initial call
}

function toggleSidebar() {
  sidebar.classList.toggle("collapsed");
}

function handleResize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("mobile");
  } else {
    sidebar.classList.remove("mobile");
  }
}

function handleStatusFilter(filter) {
  currentFilter = filter;
  currentPage = 1;

  // Update active tab
  statusTabs.forEach((tab) => tab.classList.remove("active"));
  const activeTab = Array.from(statusTabs).find((tab) =>
    tab.textContent.toLowerCase().includes(filter === "all" ? "all" : filter),
  );
  if (activeTab) {
    activeTab.classList.add("active");
  }

  renderOrdersTable();
}

function handleSearch(event) {
  searchQuery = event.target.value.toLowerCase();
  currentPage = 1;
  renderOrdersTable();
}

function handleCheckboxChange(event) {
  if (event.target.classList.contains("checkbox")) {
    const row = event.target.closest("tr");
    if (event.target.checked) {
      row.classList.add("selected");
    } else {
      row.classList.remove("selected");
    }
  }
}

function filterOrders() {
  let filtered = orderData;

  // Filter by status
  if (currentFilter !== "all") {
    filtered = filtered.filter((order) => {
      switch (currentFilter) {
        case "completed":
          return order.status === "delivered";
        case "pending":
          return order.status === "pending" || order.status === "shipped";
        case "cancelled":
          return order.status === "cancelled";
        default:
          return true;
      }
    });
  }

  // Filter by search query
  if (searchQuery) {
    filtered = filtered.filter(
      (order) =>
        order.orderId.toLowerCase().includes(searchQuery) ||
        order.product.name.toLowerCase().includes(searchQuery) ||
        order.status.toLowerCase().includes(searchQuery) ||
        order.payment.toLowerCase().includes(searchQuery),
    );
  }

  return filtered;
}

function renderOrdersTable() {
  const filteredOrders = filterOrders();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageOrders = filteredOrders.slice(startIndex, endIndex);

  ordersTableBody.innerHTML = "";

  pageOrders.forEach((order, index) => {
    const row = createOrderRow(order, startIndex + index + 1);
    ordersTableBody.appendChild(row);
  });

  // Update pagination if needed
  updatePagination(filteredOrders.length);
}

function createOrderRow(order, rowNumber) {
  const row = document.createElement("tr");
  row.className = "table-row";

  row.innerHTML = `
    <td class="px-4 py-3">
      <div class="flex items-center space-x-2">
        <input type="checkbox" class="checkbox" />
        <span class="text-sm text-black">${rowNumber}</span>
      </div>
    </td>
    <td class="px-4 py-3 text-center">
      <span class="text-sm text-black">${order.orderId}</span>
    </td>
    <td class="px-4 py-3">
      <div class="flex items-center space-x-3">
        <img src="${order.product.image}" alt="${order.product.name}" class="product-image" />
        <span class="text-sm text-black truncate">${order.product.name}</span>
      </div>
    </td>
    <td class="px-4 py-3 text-center">
      <span class="text-sm text-black">${order.date}</span>
    </td>
    <td class="px-4 py-3 text-center">
      <span class="text-sm text-black">$${order.price}</span>
    </td>
    <td class="px-4 py-3 text-center">
      <div class="flex items-center justify-center">
        <div class="payment-dot ${order.payment}"></div>
        <span class="text-sm text-black capitalize">${order.payment}</span>
      </div>
    </td>
    <td class="px-4 py-3 text-center">
      ${getStatusBadge(order.status)}
    </td>
  `;

  return row;
}

function getStatusBadge(status) {
  const badges = {
    delivered: `
      <div class="flex items-center justify-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 3.75H14C14.9665 3.75 15.75 4.53351 15.75 5.5V6.88965H17.7041C18.2848 6.88978 18.8279 7.1782 19.1533 7.65918L21.6992 11.4238C21.895 11.7132 21.9999 12.0549 22 12.4043V17.25H22.5C22.6381 17.25 22.75 17.3619 22.75 17.5C22.75 17.6381 22.6381 17.75 22.5 17.75H20.1621L20.0869 18.1582C19.8651 19.3485 18.8198 20.2498 17.5654 20.25C16.3109 20.25 15.2657 19.3487 15.0439 18.1582L14.9678 17.75H10.4121L10.3369 18.1582C10.1151 19.3485 9.06978 20.2498 7.81543 20.25C6.56089 20.25 5.51579 19.3487 5.29395 18.1582L5.21777 17.75H4.75C3.78351 17.75 3 16.9665 3 16V5.5C3 4.5335 3.7835 3.75 4.75 3.75ZM7.81543 15.6201C6.67509 15.6201 5.75023 16.5443 5.75 17.6846C5.75 18.825 6.67495 19.75 7.81543 19.75C8.95571 19.7498 9.87988 18.8249 9.87988 17.6846C9.87965 16.5445 8.95557 15.6203 7.81543 15.6201ZM17.5654 15.6201C16.4251 15.6201 15.5002 16.5443 15.5 17.6846C15.5 18.825 16.425 19.75 17.5654 19.75C18.7057 19.7498 19.6299 18.8249 19.6299 17.6846C19.6297 16.5445 18.7055 15.6203 17.5654 15.6201ZM4.75 4.25C4.05965 4.25 3.5 4.80965 3.5 5.5V16C3.5 16.6903 4.05964 17.25 4.75 17.25H5.25977L5.37109 16.9023C5.70208 15.8679 6.67245 15.1201 7.81543 15.1201C8.95822 15.1203 9.92782 15.868 10.2588 16.9023L10.3701 17.25H15.0098L15.1211 16.9023C15.1466 16.8227 15.1762 16.7448 15.209 16.6689L15.25 16.5742V5.5C15.25 4.80964 14.6903 4.25 14 4.25H4.75ZM15.75 15.707L16.4648 15.3672C16.7977 15.2089 17.1707 15.1201 17.5654 15.1201C18.7082 15.1203 19.6779 15.8681 20.0088 16.9023L20.1201 17.25H21.5V12.1953H15.75V15.707ZM15.75 11.6953H21.2793L20.751 10.915L18.7393 7.93945C18.5068 7.5959 18.1189 7.38978 17.7041 7.38965H15.75V11.6953Z" stroke="#21C45D"/>
          <path d="M12.5 10C12.5 11.6569 11.1569 13 9.5 13C7.84315 13 6.5 11.6569 6.5 10C6.5 8.34315 7.84315 7 9.5 7C9.97068 7 10.4161 7.1084 10.8125 7.30159M11.9375 8.125L9.3125 10.75L8.5625 10" stroke="#21C45D" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-sm text-green-600 font-medium">Delivered</span>
      </div>
    `,
    pending: `
      <div class="flex items-center justify-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.4375 18.9375C19.4375 19.5508 19.1939 20.139 18.7602 20.5727C18.3265 21.0064 17.7383 21.25 17.125 21.25C16.5117 21.25 15.9235 21.0064 15.4898 20.5727C15.0561 20.139 14.8125 19.5508 14.8125 18.9375C14.8125 18.3242 15.0561 17.736 15.4898 17.3023C15.9235 16.8686 16.5117 16.625 17.125 16.625C17.7383 16.625 18.3265 16.8686 18.7602 17.3023C19.1939 17.736 19.4375 18.3242 19.4375 18.9375ZM10.1875 18.9375C10.1875 19.5508 9.94386 20.139 9.51018 20.5727C9.07651 21.0064 8.48831 21.25 7.875 21.25C7.26169 21.25 6.67349 21.0064 6.23982 20.5727C5.80614 20.139 5.5625 19.5508 5.5625 18.9375C5.5625 18.3242 5.80614 17.736 6.23982 17.3023C6.67349 16.8686 7.26169 16.625 7.875 16.625C8.48831 16.625 9.07651 16.8686 9.51018 17.3023C9.94386 17.736 10.1875 18.3242 10.1875 18.9375Z" stroke="#F59F0A" stroke-width="1.58571"/>
          <path d="M3.25 12V16.625C3.25 17.4899 3.25 17.9219 3.43592 18.2438C3.5577 18.4547 3.73284 18.6298 3.94375 18.7516C4.26565 18.9375 4.69763 18.9375 5.5625 18.9375M14.8125 18.9375H10.1875M15.275 17.0875V9.225C15.275 7.91705 15.275 7.26308 14.868 6.857C14.4629 6.45 13.8089 6.45 12.5 6.45H11.575M15.7375 8.7625H17.4034C18.1712 8.7625 18.555 8.7625 18.8732 8.94287C19.1914 9.12232 19.3885 9.45162 19.7835 10.1102L21.355 12.728C21.5511 13.0554 21.6492 13.2201 21.7 13.4014C21.75 13.5836 21.75 13.7742 21.75 14.1562V16.625C21.75 17.4899 21.75 17.9219 21.5641 18.2438C21.4423 18.4547 21.2672 18.6298 21.0563 18.7516C20.7344 18.9375 20.3024 18.9375 19.4375 18.9375M8.66125 8.16125L7.4125 7.32875V5.2475M3.25 6.9125C3.25 7.45913 3.35767 8.0004 3.56685 8.50542C3.77604 9.01044 4.08264 9.46931 4.46917 9.85583C4.85569 10.2424 5.31456 10.549 5.81958 10.7581C6.3246 10.9673 6.86587 11.075 7.4125 11.075C7.95913 11.075 8.5004 10.9673 9.00542 10.7581C9.51044 10.549 9.96931 10.2424 10.3558 9.85583C10.7424 9.46931 11.049 9.01044 11.2581 8.50542C11.4673 8.0004 11.575 7.45913 11.575 6.9125C11.575 5.80854 11.1365 4.74979 10.3558 3.96917C9.57521 3.18855 8.51646 2.75 7.4125 2.75C6.30854 2.75 5.24979 3.18855 4.46917 3.96917C3.68855 4.74979 3.25 5.80854 3.25 6.9125Z" stroke="#F59F0A" stroke-width="1.58571"/>
        </svg>
        <span class="text-sm text-yellow-600 font-medium">Pending</span>
      </div>
    `,
    shipped: `
      <div class="flex items-center justify-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.3 15.5732V6.53867C16.3 6.03476 16.0998 5.55149 15.7435 5.19517C15.3872 4.83885 14.9039 4.63867 14.4 4.63867H4.9C4.39609 4.63867 3.91282 4.83885 3.5565 5.19517C3.20018 5.55149 3 6.03476 3 6.53867V15.0887C3 15.3406 3.10009 15.5823 3.27825 15.7604C3.45641 15.9386 3.69804 16.0387 3.95 16.0387H4.6245C4.80968 15.6158 5.11407 15.2561 5.50044 15.0036C5.8868 14.751 6.3384 14.6165 6.8 14.6165C7.2616 14.6165 7.7132 14.751 8.09956 15.0036C8.48593 15.2561 8.79032 15.6158 8.9755 16.0387H16.0245C16.0942 15.8708 16.186 15.7157 16.3 15.5732ZM16.3 15.5732C16.5469 15.2383 16.8777 14.9744 17.2592 14.8083C17.6406 14.6421 18.0591 14.5794 18.4724 14.6266C18.8858 14.6739 19.2794 14.8293 19.6135 15.0772C19.9477 15.3251 20.2105 15.6567 20.3755 16.0387H22V13.2932C22.0004 12.6038 21.8132 11.9273 21.4585 11.3362L20.29 9.38867L19.4255 7.95417C19.3414 7.81236 19.2219 7.69487 19.0786 7.61325C18.9354 7.53163 18.7734 7.4887 18.6085 7.48867H16.3V15.5732Z" stroke="black" stroke-width="1.425"/>
          <path d="M11.5498 11.2885H6.7998M11.5498 8.43848H6.7998M9.1748 16.9885C9.17522 17.3418 9.0968 17.6907 8.94527 18.0099C8.79374 18.3291 8.57291 18.6104 8.29887 18.8334C8.02483 19.0564 7.70449 19.2155 7.3612 19.299C7.0179 19.3825 6.6603 19.3884 6.31444 19.3161C5.96859 19.2439 5.64321 19.0955 5.362 18.8816C5.08079 18.6677 4.85085 18.3938 4.68892 18.0798C4.527 17.7657 4.43717 17.4195 4.42599 17.0664C4.41482 16.7133 4.48256 16.3621 4.6243 16.0385C4.843 15.5391 5.22681 15.1302 5.71132 14.8804C6.19583 14.6305 6.75154 14.555 7.28517 14.6664C7.81879 14.7778 8.29785 15.0694 8.64193 15.4922C8.98601 15.915 9.17416 16.4433 9.1748 16.9885ZM20.5748 16.9885C20.5752 17.3418 20.4968 17.6907 20.3453 18.0099C20.1937 18.3291 19.9729 18.6104 19.6989 18.8334C19.4248 19.0564 19.1045 19.2155 18.7612 19.299C18.4179 19.3825 18.0603 19.3884 17.7144 19.3161C17.3686 19.2439 17.0432 19.0955 16.762 18.8816C16.4808 18.6677 16.2508 18.3938 16.0889 18.0798C15.927 17.7657 15.8372 17.4195 15.826 17.0664C15.8148 16.7133 15.8826 16.3621 16.0243 16.0385C16.094 15.8706 16.1858 15.7155 16.2998 15.573C16.5467 15.2381 16.8775 14.9742 17.259 14.8081C17.6404 14.6419 18.0589 14.5792 18.4722 14.6264C18.8856 14.6737 19.2792 14.8291 19.6133 15.077C19.9475 15.3249 20.2103 15.6565 20.3753 16.0385C20.5083 16.3377 20.5767 16.6617 20.5748 16.9885Z" stroke="black" stroke-width="1.425"/>
        </svg>
        <span class="text-sm text-black font-medium">Shipped</span>
      </div>
    `,
    cancelled: `
      <div class="flex items-center justify-center space-x-2">
        <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.75 3.75H14C14.9665 3.75 15.75 4.53351 15.75 5.5V6.88965H17.7041C18.2848 6.88978 18.8279 7.1782 19.1533 7.65918L21.6992 11.4238C21.895 11.7132 21.9999 12.0549 22 12.4043V17.25H22.5C22.6381 17.25 22.75 17.3619 22.75 17.5C22.75 17.6381 22.6381 17.75 22.5 17.75H20.1621L20.0869 18.1582C19.8651 19.3485 18.8198 20.2498 17.5654 20.25C16.3109 20.25 15.2657 19.3487 15.0439 18.1582L14.9678 17.75H10.4121L10.3369 18.1582C10.1151 19.3485 9.06978 20.2498 7.81543 20.25C6.56089 20.25 5.51579 19.3487 5.29395 18.1582L5.21777 17.75H4.75C3.78351 17.75 3 16.9665 3 16V5.5C3 4.5335 3.7835 3.75 4.75 3.75ZM7.81543 15.6201C6.67509 15.6201 5.75023 16.5443 5.75 17.6846C5.75 18.825 6.67495 19.75 7.81543 19.75C8.95571 19.7498 9.87988 18.8249 9.87988 17.6846C9.87965 16.5445 8.95557 15.6203 7.81543 15.6201ZM17.5654 15.6201C16.4251 15.6201 15.5002 16.5443 15.5 17.6846C15.5 18.825 16.425 19.75 17.5654 19.75C18.7057 19.7498 19.6299 18.8249 19.6299 17.6846C19.6297 16.5445 18.7055 15.6203 17.5654 15.6201ZM4.75 4.25C4.05965 4.25 3.5 4.80965 3.5 5.5V16C3.5 16.6903 4.05964 17.25 4.75 17.25H5.25977L5.37109 16.9023C5.70208 15.8679 6.67245 15.1201 7.81543 15.1201C8.95822 15.1203 9.92782 15.868 10.2588 16.9023L10.3701 17.25H15.0098L15.1211 16.9023C15.1466 16.8227 15.1762 16.7448 15.209 16.6689L15.25 16.5742V5.5C15.25 4.80964 14.6903 4.25 14 4.25H4.75ZM15.75 15.707L16.4648 15.3672C16.7977 15.2089 17.1707 15.1201 17.5654 15.1201C18.7082 15.1203 19.6779 15.8681 20.0088 16.9023L20.1201 17.25H21.5V12.1953H15.75V15.707ZM15.75 11.6953H21.2793L20.751 10.915L18.7393 7.93945C18.5068 7.5959 18.1189 7.38978 17.7041 7.38965H15.75V11.6953Z" stroke="#EF4343"/>
          <path d="M9.151 10.849L10.849 9.151M10.849 10.849L9.151 9.151M10 13C11.65 13 13 11.65 13 10C13 8.35 11.65 7 10 7C8.35 7 7 8.35 7 10C7 11.65 8.35 13 10 13Z" stroke="#EF4343" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="text-sm text-red-600 font-medium">Cancelled</span>
      </div>
    `,
  };

  return badges[status] || badges.pending;
}

function updatePagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  // Update pagination controls here if needed
  // This is a simplified version - you could expand this to show proper page numbers
}

function updateStatistics() {
  const totalOrders = orderData.length;
  const newOrders = orderData.filter((order) => {
    // Assuming new orders are from the last 7 days
    return order.status === "pending" || order.status === "shipped";
  }).length;
  const completedOrders = orderData.filter(
    (order) => order.status === "delivered",
  ).length;
  const cancelledOrders = orderData.filter(
    (order) => order.status === "cancelled",
  ).length;

  // Update the statistics cards
  // This could be expanded to show real-time data
}

// Utility functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="flex items-center space-x-2">
      <div class="flex-1">
        <p class="text-sm font-medium text-gray-900">${message}</p>
      </div>
      <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(notification);

  // Show the notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

// Export functions for testing (if needed)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    filterOrders,
    formatDate,
    formatCurrency,
    orderData,
  };
}

// Additional functionality that could be added:

// Function to add new order
function addNewOrder(orderData) {
  // Implementation for adding new orders
  showNotification("New order added successfully!");
  renderOrdersTable();
  updateStatistics();
}

// Function to update order status
function updateOrderStatus(orderId, newStatus) {
  const order = orderData.find((o) => o.orderId === orderId);
  if (order) {
    order.status = newStatus;
    renderOrdersTable();
    updateStatistics();
    showNotification(`Order ${orderId} status updated to ${newStatus}`);
  }
}

// Function to delete order
function deleteOrder(orderId) {
  const index = orderData.findIndex((o) => o.orderId === orderId);
  if (index !== -1) {
    orderData.splice(index, 1);
    renderOrdersTable();
    updateStatistics();
    showNotification(`Order ${orderId} deleted successfully`, "warning");
  }
}

// Function to export data
function exportOrders(format = "csv") {
  const filteredOrders = filterOrders();

  if (format === "csv") {
    let csv = "Order ID,Product,Date,Price,Payment,Status\n";
    filteredOrders.forEach((order) => {
      csv += `${order.orderId},"${order.product.name}",${order.date},$${order.price},${order.payment},${order.status}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.csv";
    a.click();
    window.URL.revokeObjectURL(url);

    showNotification("Orders exported successfully!");
  }
}

// Keyboard shortcuts
document.addEventListener("keydown", function (event) {
  // Ctrl/Cmd + K for search
  if ((event.ctrlKey || event.metaKey) && event.key === "k") {
    event.preventDefault();
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
      searchInput.focus();
    }
  }

  // Escape to clear search
  if (event.key === "Escape") {
    const searchInputs = document.querySelectorAll(
      'input[placeholder*="Search"]',
    );
    searchInputs.forEach((input) => {
      input.value = "";
      input.dispatchEvent(new Event("input"));
    });
  }
});



