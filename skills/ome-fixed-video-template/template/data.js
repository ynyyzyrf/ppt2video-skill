window.OME_VIDEO_DATA = {
      brand: "OME數字化生態",
      coverTitle: "AI 教助推進方向同步",

      architecture: {
        kicker: "MACRO ARCHITECTURE",
        title: '通用 <span class="accent">AI</span> 教助宏觀架構',
        subtitle: "上游知識庫提供內容，中游 AI 教助結合下游人物天文網，實現千人千面的智能輸出",
        cards: [
          {
            step:"01",
            title:"上游：知識庫",
            desc:"沉澱企業知識，提供專業內容",
            chips:["SOP","產品資料","項目文檔","FAQ / 經驗"]
          },
          {
            step:"02",
            title:"中游：AI 教助",
            desc:"理解問題、檢索知識、結合人物上下文，生成專業個性化答案",
            chips:["理解問題","檢索知識","組織答案"]
          }
        ],
        result:{
          label:"PERSONALIZED OUTPUT",
          title:"千人千面輸出",
          items:[
            ["老闆視角","戰略、ROI、決策重點"],
            ["銷售視角","客戶需求、方案建議"],
            ["技術視角","技術細節、實施方案"],
            ["客戶視角","價值收益、使用指引"]
          ]
        }
      },

      fourStep:{
        kicker:"MICRO ARCHITECTURE",
        title:'通用 <span class="accent">AI</span> 教助微觀架構',
        subtitle:"以知識為核心，連接多端，持續評測與優化，為客戶與企業內部同事提供可靠的 AI 教助服務",
        steps:[
          {n:"1",title:"知識編輯",desc:"沉澱與整理",icon:"◇",features:["文檔 / FAQ","業務知識","流程規範"]},
          {n:"2",title:"知識管理",desc:"統一存儲與版本控制",icon:"⌘",features:["版本管理","權限控制","變更記錄"]},
          {n:"3",title:"Agent",desc:"檢索知識、理解問題、生成回答",icon:"✦",features:["知識搜索","大模型理解","生成專業回答"]},
          {n:"4",title:"多端使用",desc:"面向客戶與企業內部同事",icon:"◎",features:["Web 端","企業微信","飛書 / 微信"]}
        ],
        feedback:["Langfuse","觀測","評測","分析效果","用戶反饋","持續優化"]
      },

      roadmap:{
        kicker:"DELIVERY ROADMAP",
        title:'通用 <span class="accent">AI</span> 教助落地計劃',
        subtitle:"先跑通一個案例，再實現千人千面，最後複製到更多場景",
        stages:[
          {
            n:"1",title:"本周：微觀助手落地",
            desc:"以 John 的需求作為第一個案例，先落地推出使用",
            items:[["知識整理","沉澱與結構化"],["Agent 接入","連接大模型能力"],["多端使用","Web / 企業微信"],["評測優化","持續觀測與優化"]],
            deliver:"產出：John AI 教助 V1 可實際使用"
          },
          {
            n:"2",title:"本月：宏觀架構聯動",
            desc:"對接 RMS，結合 John 的需求與人物天文網進行輸出",
            items:[["身份","人物角色與職責"],["標籤","興趣、能力標籤"],["關係","組織與人際關係"],["歷史","過往互動與記錄"]],
            deliver:"產出：同一份知識，根據不同人物實現千人千面輸出"
          },
          {
            n:"3",title:"下個月：場景複製擴展",
            desc:"繼續尋找其他 AI 教助場景落地",
            items:[["複用底座","沉澱核心能力"],["擴展場景","覆蓋更多業務場景"],["沉澱方法","形成最佳實踐"],["持續優化","數據驅動迭代"]],
            deliver:"產出：形成可複製的通用 AI 教助能力"
          }
        ],
        timeline:["本周","本月","下個月"]
      },

      ending:{
        title:"讓 AI 真正服務業務",
        subtitle:"從一個案例開始，逐步形成可複製、可持續優化的通用能力"
      },

      extraScenes:[
        {
          kicker:"WIDGET TOOLKIT",
          title:'可組合的 <span class="accent">PPT</span> 小組件',
          subtitle:"同一套 OME 視覺下，可以插入指標、對比、矩陣、清單和引用等信息塊",
          layout:"grid-3",
          duration:8,
          widgets:[
            {type:"metric",label:"KPI",title:"首個版本",value:"7 天",note:"從素材整理到可演示版本",trend:"適合進度同步"},
            {type:"comparison",label:"BEFORE / AFTER",title:"前後對比",desc:"用於表達改造收益",items:[["改造前","文檔分散，回答依賴人工"],["改造後","知識統一，AI 可多端使用"]]},
            {type:"checklist",label:"CHECKLIST",title:"落地檢查",items:[["知識源","文檔、FAQ、流程齊備"],["評測集","有標準問題與答案"],["渠道","Web 或企業微信可用"]]}
          ]
        },
        {
          kicker:"WIDGET TOOLKIT",
          title:'流程、時間線與 <span class="accent">標籤</span>',
          subtitle:"用於講解方案路線、產品分層、能力範圍和風險邊界",
          layout:"grid-3",
          duration:8,
          widgets:[
            {type:"process",label:"PROCESS",title:"交付流程",items:[["整理","知識結構化"],["接入","Agent 與渠道"],["評測","效果觀測"],["迭代","持續優化"]]},
            {type:"timeline",label:"TIMELINE",title:"節奏安排",items:[["本周","跑通一個場景"],["本月","接入人物上下文"],["下月","複製更多案例"],["長期","沉澱通用能力"]]},
            {type:"tags",label:"SCOPE",title:"能力標籤",items:["RAG","Agent","Langfuse","多端入口","知識治理","權限","評測","運維"]}
          ]
        }
      ]
    };
