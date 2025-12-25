## Minh Tam – Portfolio

Ứng dụng web giới thiệu bản thân, kỹ năng và các dự án của **Pham Minh Tam** (Backend Developer).  
Giao diện được thiết kế đơn giản, hiện đại, có hỗ trợ dark mode và animation nhẹ khi cuộn trang.

### Công nghệ sử dụng

-   **React + TypeScript**
-   **Vite** (dev server & build)
-   **Tailwind CSS (CDN)** cho UI
-   **Motion** từ [`motion.dev`](https://motion.dev/) cho hiệu ứng animation-in sections

### Tính năng chính

-   **Hero**: phần giới thiệu nhanh, nút xem dự án và tải CV.
-   **About, Projects, Skills, System Thinking**: mô tả kinh nghiệm, dự án và cách tiếp cận hệ thống.
-   **Contact**: form liên hệ đơn giản, lưu dữ liệu demo vào `localStorage`.
-   **Dark / Light mode**: lưu trạng thái theme vào `localStorage`.
-   **Smooth scroll & scroll-to-top**: cuộn mượt giữa các section và nút về đầu trang.

### Chạy project trên máy local

Yêu cầu: đã cài **Node.js** (phiên bản mới).

1. Cài dependencies:
    ```bash
    npm install
    ```
2. Chạy dev server:
    ```bash
    npm run dev
    ```
3. Mở URL mà Vite hiển thị (thường là `http://localhost:5173`).

### CV

-   Đặt file CV của bạn vào thư mục `public` với tên: `cv-minh-tam.pdf`.
-   Các nút **Resume / Download CV** trong Navbar, Hero và Contact sẽ tự động tải file này về máy người dùng.
