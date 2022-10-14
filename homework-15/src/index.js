import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="post">
    <div className="head">
      <img className="icon" src={require("../src/assetc/shv.png")}></img>
      <p className="name">Taras Shevchenko</p>
      <svg
        width="16"
        height="16"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M49.8001 17.8601C48.9441 17.1255 47.8318 16.7603 46.707 16.8447C45.5823 16.9291 44.5368 17.4561 43.8001 18.3101L29.3001 35.1301C29.1401 35.3153 28.9432 35.4652 28.722 35.57C28.5008 35.6748 28.2602 35.7324 28.0155 35.739C27.7708 35.7456 27.5275 35.7011 27.301 35.6083C27.0745 35.5155 26.8698 35.3765 26.7001 35.2001L20.0501 28.2001C19.6711 27.7735 19.2101 27.4276 18.6946 27.183C18.1791 26.9385 17.6196 26.8002 17.0495 26.7765C16.4794 26.7527 15.9103 26.8441 15.3763 27.045C14.8422 27.2459 14.3541 27.5523 13.941 27.9459C13.5279 28.3395 13.1983 28.8123 12.9719 29.336C12.7454 29.8598 12.6267 30.4237 12.6229 30.9943C12.6191 31.5649 12.7302 32.1304 12.9496 32.6571C13.169 33.1838 13.4923 33.661 13.9001 34.0601L25.1201 45.8501C25.5179 46.2664 25.9959 46.598 26.5252 46.8249C27.0545 47.0517 27.6242 47.1691 28.2001 47.1701H28.3001C28.8931 47.1547 29.4764 47.015 30.0121 46.7601C30.5478 46.5052 31.0241 46.1406 31.4101 45.6901L50.2401 23.8601C50.9759 23.0054 51.3427 21.8939 51.2602 20.7692C51.1778 19.6444 50.6527 18.5983 49.8001 17.8601V17.8601Z"
          fill="#c8ccd1"
          id="id_101"
        ></path>
        <path
          d="M32 2.75C26.2149 2.75 20.5597 4.46548 15.7496 7.67951C10.9394 10.8935 7.1904 15.4618 4.97654 20.8065C2.76267 26.1512 2.18343 32.0324 3.31204 37.7064C4.44066 43.3803 7.22645 48.5922 11.3171 52.6829C15.4078 56.7736 20.6197 59.5594 26.2936 60.688C31.9676 61.8166 37.8488 61.2373 43.1935 59.0235C48.5382 56.8096 53.1065 53.0606 56.3205 48.2504C59.5345 43.4403 61.25 37.7851 61.25 32C61.2421 24.2449 58.1578 16.8096 52.6741 11.3259C47.1904 5.84218 39.7552 2.75794 32 2.75V2.75ZM32 58.75C26.7094 58.75 21.5375 57.1811 17.1385 54.2418C12.7395 51.3025 9.31088 47.1247 7.28624 42.2368C5.26159 37.3489 4.73185 31.9703 5.76401 26.7813C6.79616 21.5923 9.34385 16.8259 13.0849 13.0849C16.826 9.34384 21.5924 6.79615 26.7813 5.76399C31.9703 4.73184 37.3489 5.26158 42.2368 7.28622C47.1247 9.31087 51.3025 12.7395 54.2418 17.1385C57.1812 21.5375 58.75 26.7093 58.75 32C58.7421 39.0921 55.9212 45.8915 50.9063 50.9063C45.8915 55.9212 39.0921 58.7421 32 58.75V58.75Z"
          fill="#c8ccd1"
          id="id_102"
        ></path>
        <path
          d="M49.8001 17.8601C48.9441 17.1255 47.8318 16.7603 46.707 16.8447C45.5823 16.9291 44.5368 17.4561 43.8001 18.3101L29.3001 35.1301C29.1401 35.3153 28.9432 35.4652 28.722 35.57C28.5008 35.6748 28.2602 35.7324 28.0155 35.739C27.7708 35.7456 27.5275 35.7011 27.301 35.6083C27.0745 35.5155 26.8698 35.3765 26.7001 35.2001L20.0501 28.2001C19.6711 27.7735 19.2101 27.4276 18.6946 27.183C18.1791 26.9385 17.6196 26.8002 17.0495 26.7765C16.4794 26.7527 15.9103 26.8441 15.3763 27.045C14.8422 27.2459 14.3541 27.5523 13.941 27.9459C13.5279 28.3395 13.1983 28.8123 12.9719 29.336C12.7454 29.8598 12.6267 30.4237 12.6229 30.9943C12.6191 31.5649 12.7302 32.1304 12.9496 32.6571C13.169 33.1838 13.4923 33.661 13.9001 34.0601L25.1201 45.8501C25.5179 46.2664 25.9959 46.598 26.5252 46.8249C27.0545 47.0517 27.6242 47.1691 28.2001 47.1701H28.3001C28.8931 47.1547 29.4764 47.015 30.0121 46.7601C30.5478 46.5052 31.0241 46.1406 31.4101 45.6901L50.2401 23.8601C50.9759 23.0054 51.3427 21.8939 51.2602 20.7692C51.1778 19.6444 50.6527 18.5983 49.8001 17.8601V17.8601ZM48.3501 22.2301L29.5201 44.0601C29.3607 44.245 29.1646 44.3947 28.9442 44.4997C28.7239 44.6047 28.4841 44.6627 28.2401 44.6701C27.9954 44.6823 27.751 44.6403 27.5246 44.5469C27.2981 44.4535 27.095 44.3112 26.9301 44.1301L15.7101 32.3701C15.3906 32.0326 15.2176 31.5824 15.2289 31.1177C15.2401 30.6531 15.4346 30.2118 15.7701 29.8901C16.105 29.5809 16.5442 29.4095 17.0001 29.4101C17.2305 29.4147 17.4579 29.4647 17.6689 29.5574C17.88 29.6501 18.0707 29.7835 18.2301 29.9501L24.8701 36.9501C25.2789 37.3807 25.7733 37.7208 26.3216 37.9486C26.8699 38.1764 27.4598 38.2868 28.0533 38.2726C28.6469 38.2585 29.2309 38.1202 29.7677 37.8665C30.3045 37.6129 30.7822 37.2496 31.1701 36.8001L45.7001 19.9401C45.9253 19.6787 46.2228 19.4897 46.5551 19.3969C46.8874 19.3041 47.2398 19.3115 47.5679 19.4184C47.8959 19.5253 48.1851 19.7268 48.399 19.9975C48.6129 20.2683 48.742 20.5962 48.7701 20.9401C48.8037 21.4084 48.6529 21.8713 48.3501 22.2301V22.2301Z"
          fill="#c8ccd1"
          id="id_103"
        ></path>
      </svg>
      <p className="nickname">@free_man</p>
      <p className="date">14 жов.</p>
    </div>
    <div className="content">
      <div className="content_text">
        І на оновленій землі <br></br>Врага не буде, супостата,<br></br> А буде
        син, і буде мати,<br></br> І будуть люде на землі.
      </div>
      <img
        className="content_image"
        src={require("../src/assetc/shv_posts.webp")}
      ></img>
    </div>
    <div className="footer">
      <div className="item">
        <svg
          width="16"
          height="16"
          version="1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          enable-background="new 0 0 48 48"
        >
          <path
            fill="#F44336"
            d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
            id="id_101"
          ></path>
        </svg>
        <span>&nbsp;982 тис</span>
      </div>
      <div className="item">
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#c8ccd1"
            d="M8,11a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm4,0a1,1,0,1,0,1,1A1,1,0,0,0,16,11ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20Z"
            id="id_101"
          ></path>
        </svg>
        <span>&nbsp;352 тис</span>
      </div>
      <div className="item">
        <svg
          width="16"
          height="16"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.06 2.93998C60.8633 2.74433 60.6161 2.60709 60.346 2.54354C60.0759 2.47998 59.7934 2.4926 59.53 2.57998L3.53004 21.24C3.25136 21.3375 3.00767 21.5152 2.82951 21.7506C2.65134 21.986 2.54662 22.2688 2.52847 22.5635C2.51032 22.8582 2.57954 23.1517 2.72747 23.4072C2.87539 23.6628 3.09544 23.869 3.36004 24L28.21 35.79L40 60.64C40.1316 60.9069 40.3391 61.1289 40.5965 61.2783C40.8538 61.4277 41.1496 61.4977 41.4466 61.4795C41.7436 61.4613 42.0286 61.3558 42.2658 61.1762C42.5031 60.9966 42.682 60.7509 42.78 60.47L61.44 4.46998C61.5249 4.20481 61.5344 3.92125 61.4672 3.65103C61.4001 3.38082 61.2591 3.13461 61.06 2.93998V2.93998ZM54.45 7.42998L29 32.86L8.00004 22.91L54.45 7.42998ZM41.09 56L31.09 35L56.57 9.54998L41.09 56Z"
            fill="#c8ccd1"
            id="id_101"
          ></path>
        </svg>
        <span>&nbsp;256 тис</span>
      </div>
      <div className="item">
        <svg
          width="16"
          height="16"
          enable-background="new 0 0 32 32"
          id="Слой_1"
          version="1.1"
          viewBox="0 0 32 32"
        >
          <g id="Download">
            <path
              d="M31,22c-0.552,0-1,0.448-1,1v7H2v-7c0-0.552-0.448-1-1-1s-1,0.448-1,1v8c0,0.552,0.448,1,1,1h30   c0.552,0,1-0.448,1-1v-8C32,22.448,31.552,22,31,22z"
              fill="#c8ccd1"
              id="id_101"
            ></path>
            <path
              d="M15.27,23.707c0.389,0.385,1.04,0.389,1.429,0l6.999-6.9c0.395-0.391,0.394-1.024,0-1.414   c-0.394-0.391-1.034-0.391-1.428,0l-5.275,5.2V1c0-0.552-0.452-1-1.01-1c-0.558,0-1.01,0.448-1.01,1v19.593l-5.275-5.2   c-0.395-0.391-1.034-0.391-1.428,0c-0.395,0.391-0.395,1.024,0,1.414L15.27,23.707z"
              fill="#c8ccd1"
              id="id_102"
            ></path>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
        <span>&nbsp;300 тис</span>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
