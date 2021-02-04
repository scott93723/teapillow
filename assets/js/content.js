let last_update_time = '2019.09.05';
let CONTENT = {
  'en': {
    sidebar: {
      about_me: 'About Me',
      my_works: 'My Works',
      what_i_know: 'What I Know',
      my_experience: 'My Experience',
      contact_me: 'Contact Me',
      switch_lang: '切換語言',
      my_slides: 'My Slides',
      target_lang: 'zh-tw',
      back_to_top: 'Back To Top',
      latest_update: last_update_time,
    },
    about_me: {
      quote: 'Talk is cheap. Show me the code.',
      learn_more: 'Learn more',
      visit_blog: 'Visit my blog'
    },
    my_works_section: {
      work_list: [{
        img_src: 'images/works/Vue-Erate-Home.jpg',
        title: 'Exchange rate (Free-Erate)',
        text: 'This website was provided ideas from friends before he went abroad. We use github to cooperate, it offer exchange rates between 20 popular currencies.',
        enabled: true,
        buttons: [{
          link_text: 'Free-Erate',
          link_to: 'https://erate.now.sh'
        }, {
          link_text: 'GitHub',
          link_to: 'https://github.com/joechen0730/Vue-Eate'
        }]
      }, {
        img_src: 'images/works/japan-travel.jpg',
        title: 'Japan independent tours',
        text: 'This website is my final achievement in Vocational Training Bureau\'s frontend class, code the RWD page with 1200px and 600px breakpoints, and add a variety of animation effects.',
        enabled: true,
        buttons: [{
          link_text: 'Japan Travel',
          link_to: 'https://mix-liten.github.io/japan-travel/'
        }]
      }, {
        img_src: 'images/works/ops.jpg',
        title: 'Affiliate O.P.S',
        text: 'This webiste was designed and developed by me when I was working for Concept. The matched platform provide opportunities for merchants to collaborate with advertising pusher, let common people can be an advertising pusher to get income by post.',
        enabled: true,
        buttons: [{
          link_to: 'https://affiliate.ecops.cc/',
          link_text: 'Affiliate O.P.S'
        }]
      }, ]
    },
    what_i_know: {
      what_i_know: 'What I Know',
      text: 'I\'m a frontend web developer. The following figure is a brief summary of my skills.',
      skills: [{
          icon: 'desktop',
          title: 'Frontend',
          text: 'Vue.js, React, HTML, CSS, Native JS, jQuery, Bootstrap'
        },
        {
          icon: 'codepen',
          title: 'Node.js',
          text: 'One years of Node.js experience, both backend development (Express.js, Koa) and web crawler.'
        },
        {
          icon: 'code-fork',
          title: 'Git',
          text: 'Two years of git version control experience. Collaborating with more than ten developer.'
        },
        {
          icon: 'code',
          title: 'PHP / Laravel',
          text: 'Because of the high usage rate of the language，self-study to improve code ability in leisure time.'
        },
        {
          icon: 'terminal',
          title: 'CentOS Server / OpenShift',
          text: 'One years of CentOS Server / Unix-like experience. Experienced in OpenShift developed by Red Hat.'
        },
        {
          icon: 'chain',
          title: 'Other',
          text: 'Python, MySQL, C#.Net, LINE Bot, Flutter'
        },
      ]
    },
    my_experince_section: {
      experiences: [{
        title: 'Frontend Stack Developer, Concept',
        date: '2018.8 - 2019.8',
        list: [
          'Participate in some website layout projects, follow the sketch design, and assist colleagues in the same period',
          'Maintain the e-commerce developed with ASP.NET MVC',
          'In charge of frontend to develop Affiliate O.P.S project by Vue. During the period, resolved the SSR of the SPA website and Iframe cross-domain data transfer and the short URL has unexpected problems on preview message in FB and Line',
          'Implement an IoT server written in Node.js + MongoDB on the OpenShift platform to receive the message returned by the communication module and send the processed message to MQTT, and maintain the same project\'s management system',
        ],
        link: 'https://www.cctech-support.com/',
        link_text: 'Concept'
      }, {
        title: 'Vocational Training Bureau, Cross-platform web programming class',
        date: '2017.9 - 2017.12',
        list: [
          'Learn HTML5、JavaScript、CSS3',
          'Learn PHP、MySQL、Laravel',
          'Learn C#、ASP.NET MVC、MS-SQL',
          'Learn System analysis and design',
        ],
        link: 'https://www.wda.gov.tw/Content_List.aspx?n=5B78EEBCE18CBE9F',
        link_text: 'WorkForce'
      }, ]
    }
  },
  'zh-tw': {
    sidebar: {
      about_me: '關於我',
      my_works: '作品集',
      what_i_know: '專業技能',
      my_experience: '經歷',
      contact_me: '聯絡我',
      switch_lang: 'English',
      my_slides: '簡報',
      target_lang: 'en',
      back_to_top: '返回頁首',
      latest_update: last_update_time,
    },
    about_me: {
      quote: '寫程式是專長也是興趣',
      learn_more: '繼續閱讀',
      visit_blog: '部落格',
    },
    my_works_section: {
      work_list: [{
        img_src: 'images/works/Vue-Erate-Home.jpg',
        title: '匯率兌換 (Free-Erate)',
        text: '此匯率兌換網站為朋友出國前提出的點子，與朋友通過 GitHub 共同協作此專案，此網站提供二十種熱門貨幣之間的匯率換算。',
        enabled: true,
        buttons: [{
          link_text: 'Free-Erate',
          link_to: 'https://erate.now.sh'
        }, {
          link_text: 'GitHub',
          link_to: 'https://github.com/joechen0730/Vue-Eate'
        }]
      }, {
        img_src: 'images/works/japan-travel.jpg',
        title: '日本自由行',
        text: '此網站是我在職訓局學習網頁前端的期末成果，手刻了分界點為1200px及600px的RWD頁面，並加入多種動畫效果。',
        enabled: true,
        buttons: [{
          link_text: 'Japan Travel',
          link_to: 'https://mix-liten.github.io/japan-travel/'
        }]
      }, {
        img_src: 'images/works/ops.jpg',
        title: 'O.P.S 聯盟行銷',
        text: '任職於柯思科技時所開發的媒合平台，為公司與1shop合作之產品，提供機會讓1shop的商家與網路廣告推手合作，此平台讓一般人也可成為廣告推手，讓分享推文變成收入。',
        enabled: true,
        buttons: [{
          link_to: 'https://affiliate.ecops.cc/',
          link_text: 'Affiliate O.P.S'
        }]
      }, ]
    },
    what_i_know: {
      what_i_know: '專業技能',
      text: '我的專長是網頁前端開發及前後端整合，以下是我的技能樹：',
      skills: [{
          icon: 'desktop',
          title: 'Frontend',
          text: 'Vue.js, React, HTML, CSS, Native JS, jQuery, Bootstrap'
        },
        {
          icon: 'codepen',
          title: 'Node.js',
          text: '一年 Node.js 開發經驗，曾使用 Express.js, Koa 開發網頁後端，也曾使用 Node.js 做 web crawler'
        },
        {
          icon: 'code-fork',
          title: 'Git',
          text: '兩年 Git 版本控制經驗，曾與十個以上的開發者一同協作專案'
        },
        {
          icon: 'code',
          title: 'PHP / Laravel',
          text: '因該語言使用率偏高，閒暇時自學以精進能力的廣度'
        },
        {
          icon: 'terminal',
          title: 'CentOS Server / OpenShift',
          text: '一年 CentOS / 類 Unix 系統經驗。曾使用紅帽公司的 OpenShift。'
        },
        {
          icon: 'chain',
          title: 'Other',
          text: 'Python, MySQL, C#.Net, LINE Bot, Flutter'
        }
      ]
    },
    my_experince_section: {
      experiences: [{
        title: 'Concept 柯思科技 工程師',
        date: '2018.8 - 2019.8',
        list: [
          '參與多項形象網站切版專案，依照 Sketch 設計圖完成，期間適時協助同期同事',
          '維護以 ASP.NET MVC 開發的大型電商前後端',
          '主導前端以 Vue 開發商家與廣告推手之間的媒合平台，與後端採前後端分離形式合作，期間解決了 SPA 網站的SSR、Iframe跨域傳遞資料和導頁短網址於 FB 、 Line 出現非預期預覽訊息等問題',
          '在 OpenShift 平台上實作以 Node.js + MongoDB 寫的物聯網伺服器，用來接收通訊模組回傳的訊息，且發送處理後的訊息到 MQTT，並維護同專案既有的管理後台',
        ],
        link: 'https://www.cctech-support.com/',
        link_text: 'Concept'
      }, {
        title: '台灣就業通職業訓練 跨平台網頁程式設計班',
        date: '2017.9 - 2017.12',
        list: [
          '學習HTML5、JavaScript、CSS3',
          '學習PHP、MySQL、Laravel',
          '學習C#、ASP.NET MVC、MS-SQL',
          '學習系統分析與設計',
        ],
        link: 'https://www.wda.gov.tw/Content_List.aspx?n=5B78EEBCE18CBE9F',
        link_text: 'WorkForce'
      }, ]
    }
  }
};