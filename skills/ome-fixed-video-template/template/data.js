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
        },
        {
          kicker:"FDE RESEARCH PACK",
          title:'角色邊界與 <span class="accent">交付閉環</span>',
          subtitle:"用於講清 FDE 和相近角色的差異，以及從現場到產品反饋的閉環",
          layout:"grid-2",
          duration:8,
          widgets:[
            {type:"role-comparison",label:"ROLE MAP",title:"FDE 不是誰",roles:[
              {title:"FDE",goal:"直接寫代碼、接系統、推上生產",code:"Production"},
              {title:"售前",goal:"證明能做，降低購買風險",code:"Technical win"},
              {title:"SA",goal:"定架構和約束，控制長期風險",code:"Architecture"},
              {title:"顧問",goal:"回答為何做、做什麼、怎麼變革",code:"Business case"}
            ]},
            {type:"delivery-loop",label:"LOOP",title:"FDE 交付閉環",center:"可衡量業務價值",steps:[
              ["Discovery","找高價值問題"],
              ["Prototype","快速驗證路線"],
              ["Production","推過上線門檻"],
              ["Adoption","追蹤真實採用"],
              ["Feedback","反哺產品能力"]
            ]}
          ]
        },
        {
          kicker:"FDE RESEARCH PACK",
          title:'三層方案與 <span class="accent">行業矩陣</span>',
          subtitle:"用於把長篇市場方案壓成可掃描的結構",
          layout:"grid-2",
          duration:8,
          widgets:[
            {type:"solution-stack",label:"SOLUTION STACK",title:"FDE 三層方案",layers:[
              {n:"1",title:"把產品接進去",text:"API、IAM、數據、網絡與遺留系統",tags:["Connector","SSO","Data"]},
              {n:"2",title:"把流程重做出來",text:"Agent、Copilot、自動化與人機協作",tags:["Agent","Workflow"]},
              {n:"3",title:"變成生產系統",text:"Evaluation、observability、SLO 與 runbook",tags:["Eval","SLO","Runbook"]}
            ]},
            {type:"industry-matrix",label:"INDUSTRY MATRIX",title:"行業方案速覽",industries:[
              {industry:"SaaS",solution:"企業 RAG / Agent / 嵌入式 AI",kpi:"採用率"},
              {industry:"製造",solution:"預測維護、質檢、OT/IT 整合",kpi:"停機率"},
              {industry:"金融",solution:"KYC、風控、監管報告",kpi:"誤報率"},
              {industry:"醫療",solution:"病歷摘要、文檔處理、FHIR",kpi:"周轉時間"},
              {industry:"零售",solution:"搜索推薦、供應鏈 agent",kpi:"轉化率"},
              {industry:"電信",solution:"AIOps、故障關聯、閉環自愈",kpi:"MTTR"}
            ]}
          ]
        },
        {
          kicker:"FDE RESEARCH PACK",
          title:'市場信號與 <span class="accent">適用判斷</span>',
          subtitle:"用於回答為什麼現在值得看 FDE，以及哪些項目適合買 FDE",
          layout:"grid-2",
          duration:8,
          widgets:[
            {type:"market-signals",label:"SIGNALS",title:"市場正在升溫",signals:[
              {name:"OpenAI",signal:"招聘覆蓋醫療、政府、法律、半導體",note:"垂直化"},
              {name:"AWS",signal:"約 45 天密集式前線 AI 工程周期",note:"工程嵌入"},
              {name:"Google",signal:"與 Accenture 規劃 1,000 人 FDE 隊伍",note:"規模化"},
              {name:"BytePlus",signal:"強調 agent、eval、observability",note:"中國樣本"}
            ]},
            {type:"fit-checker",label:"FIT CHECK",title:"什麼項目適合 FDE",yesLabel:"適合",noLabel:"不適合",fit:[
              ["高價值問題","有清楚業務 owner 和 KPI"],
              ["高不確定性","路線需要邊做邊驗證"],
              ["真實系統可接","數據、API、權限可以打通"]
            ],noFit:[
              ["需求完全固定","普通外包或 SI 更經濟"],
              ["沒有 baseline","無法判斷是否產生 ROI"],
              ["業務 owner 缺席","容易變成漂亮 PoC"]
            ]}
          ]
        },
        {
          kicker:"FDE RESEARCH PACK",
          title:'KPI、風險與 <span class="accent">合同治理</span>',
          subtitle:"用於把採購與治理建議做成能落地的檢查面板",
          layout:"grid-3",
          duration:8,
          widgets:[
            {type:"kpi-scorecard",label:"SCORECARD",title:"四層 KPI",kpis:[
              {title:"技術",value:"Eval",text:"質量、延遲、錯誤率"},
              {title:"流程",value:"Time",text:"處理時長與人工作業"},
              {title:"採用",value:"WAU",text:"真實使用與留存"},
              {title:"財務",value:"Cost",text:"單任務成本與 ROI"}
            ]},
            {type:"risk-register",label:"RISK",title:"主要風險",risks:[
              {level:"HIGH",title:"知識轉移",text:"能力集中在外部少數人"},
              {level:"HIGH",title:"過度定制",text:"每個客戶都變成一次性代碼"},
              {level:"MED",title:"合規安全",text:"FDE 進入客戶數據和生產環境"},
              {level:"MED",title:"Vendor lock-in",text:"模型、雲、應用與運維同時耦合"},
              {level:"MED",title:"成本漂移",text:"Token、雲資源與支持成本被低估"},
              {level:"LOW",title:"歸因失真",text:"模型指標好但業務沒有改善"}
            ]},
            {type:"contract-checklist",label:"CONTRACT",title:"合同附件",groups:[
              {title:"SOW/KPI",items:["Production 定義","baseline","驗收窗口"]},
              {title:"IP/數據",items:["代碼權利","eval corpus","日志歸屬"]},
              {title:"安全",items:["短期憑證","審計日志","P0/P1 定義"]},
              {title:"退出",items:["runbook","IaC","客戶演練"]}
            ]}
          ]
        },
        {
          kicker:"FDE RESEARCH PACK",
          title:'6-12 週 <span class="accent">FDE Sprint</span>',
          subtitle:"用於把報告結論收束成企業採用路線圖",
          layout:"stack",
          duration:8,
          widgets:[
            {type:"sprint-roadmap",label:"SPRINT ROADMAP",title:"從不確定問題到生產價值",gates:[
              {title:"選題",text:"高價值業務問題與 owner"},
              {title:"基線",text:"建立技術、流程、採用、成本 KPI"},
              {title:"衝刺",text:"FDE 進場接系統、做原型、推生產"},
              {title:"門檻",text:"Production gate 與安全治理"},
              {title:"移交",text:"代碼、eval、runbook、演練與擴展"}
            ]}
          ]
        }
      ]
    };
