export const reactData = [
  {
    id: 1,
    title: "Introduction",
    img: require("./assets/intro.png"),
    data: [
      //what is React ?
      {
        type: "lesson",
        lessonData: [
          {
            title: "ما هو React؟",
            desc: [
              {title: "React is a free and open-source front-end JavaScript library for building user interfaces.",},
              {title: "ال React هو مكتبة جافا سكريبت مفتوحة المصدر ومجانية لبناء واجهات المستخدم.",},
            ],
            info: "Library = مكتبة",
          },
          {
            title: "لماذا تتعلم React؟",
            desc: [
              {title: "React is used to build fast, flexible, and easily extensible user interfaces."},
              {title: "تستخدم React لتطوير واجهات مستخدم سريعة، ومرنة، وقابلة للتطوير بسهولة.",},  
            ],
            info: "User Interfaces = واجهات المستخدم",
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "ما هو React؟",
            answer: "مكتبة",
            options: [
              "إطار عمل",
              "لغة برمجة",
              "مكتبة",
              "قاعدة بيانات"
            ],
          },
        ]
      },
      //who developed React ?
      {
        type: "lesson",
        lessonData: [
          {
            title: "من طور React ؟",
            desc: [
              {
                title: "تم تطوير React من طرف شركة Meta ومجموعة من المطورين.",
              },
              {
                title: "ال React تساعدنا على بناء تطبيقات ويب تفاعلية وقابلة للصيانة بشكل أفضل.",
              },
            ],
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "ال React هي مكتبة تستخدم لبناء ؟",
            answer: "واجهات المستخدم (المواقع)",
            options: [
              "تطبيقات الهاتف",
              "واجهات المستخدم (المواقع)",
              "الألعاب",
            ],
          },
        ]
      },
      //features of react
      {
        type: "lesson",
        lessonData: [
          {
            title: "من طور React ؟",
            desc: [
              {
                title: "تم تطوير React من طرف شركة Meta ومجموعة من المطورين.",
              },
              {
                title: "ال React تساعدنا على بناء تطبيقات ويب تفاعلية وقابلة للصيانة بشكل أفضل.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "JSX",
    img: require("./assets/jsx.png"),
    data: [
      {
        type: "lesson",
        lessonData: [
          {
            title: "ما الذي يعينه JSX ؟",
            desc: [
              {
                title: "JSX stands for Javascript XML.",
              },
              {
                title: "ال JSX هو اختصار ل Javascript XML.",
              },
            ],
          },
          {
            title: "ما هو ال JSX ؟",
            desc: [
              {
                title: "JSX is a syntax extension for Javascript used in React to describe the user interface.",
              },
              {
                title: "ال JSX هو إمتداد بنية اللغة للغة Javascript يستخدم في React لوصف واجهة المستخدم."
              }
            ],
            info: "syntax = بنية اللغة",
            codeTitle: "مثال لل JSX:",
            code: `const greeting = <h1>مرحبًا، JSX!</h1>;`,
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "ال JSX هي اختصار ل ؟",
            answer: "Javascript XML",
            dir: "ltr",
            options: [
              "Javascript HTML",
              "Javascript XML",
              "Javascript XHTML",
            ],
          },
        ]
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "كيف نقوم بكتابة تعليق في ال JSX ؟",
            answer: "{/* comment */}",
            dir: "ltr",
            options: [
              "//comment",
              "<!-- comment -->",
              "{/* comment */}",
              "# comment",
            ],
          },
        ]
      },
    ],
  },
  {
    id: 3,
    title: "Components",
    img: require("./assets/comp.png"),
    data: [
      //what is a component
      {
        type: "lesson",
        lessonData: [
          {
            title: "ما هو ال component ؟",
            desc: [
              {
                title: "A React component is a reusable piece of code that handles a specific part of the user interface.",
              },
              {
                title: "ال component هو عنصر من الكود الذي يمكن إعادة إستخدامه، وهو يتعامل مع جزء معين من واجهة المستخدم.",
              },
            ],
            info: "Reusable = قابل لإعادة الإستخدام",
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "هل يمكن إعادة إستخدام ال components ؟",
            answer: "نعم",
            dir: "rtl",
            options: [
              "لا",
              "نعم",
            ],
          },
        ]
      },
      //types of component
      {
        type: "lesson",
        lessonData: [
          {
            title: "أنواع ال components",
            desc: [
              {
                title: "في React عندنا نوعان من ال components:",
              },
              {
                title: "ال Functional component",
              },
              {
                title: "وال Class component",
              },
            ],
            codeTitle: "مثال لل Functional component:",
            code: 
`import React from 'react';

const SimpleComponent = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default SimpleComponent;`,
          },
          {
            desc: [
              {title: "سوف نركز على تعلم وإستخدام ال Functional component وحده لأنه أسهل وأفضل.",}
            ]
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "كم عدد أنواع ال components في React ؟",
            answer: "2",
            dir: "ltr",
            options: [
              "1",
              "2",
              "3",
              "4",
            ],
          },
        ]
      },
       //what is a functional component
       {
        type: "lesson",
        lessonData: [
          {
            title: "ما هو ال Functional component ؟",
            desc: [
              {
                title: "لكي نصنع functional component علينا تتبع الخطوات التالية:",
              },
              {
                title: "أولا إنشاء ملف JS او JSX جديد وإعطائه إسمه مناسب يبدأ بحرف كبير:",
              },
              {
                title: "داخل الملف نقوم بكتابة هذا المحتوى",
              },
            ],
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "كم عدد أنواع ال components في React ؟",
            answer: "2",
            dir: "ltr",
            options: [
              "1",
              "2",
              "3",
              "4",
            ],
          },
        ]
      },
      //how to create a component
      {
        type: "lesson",
        lessonData: [
          {
            title: "كيف نصنع Functional component ؟",
            desc: [
              {
                title: "لكي نصنع functional component علينا تتبع الخطوات التالية:",
              },
              {
                title: "أولا إنشاء ملف JS او JSX جديد وإعطائه إسمه مناسب يبدأ بحرف كبير:",
              },
              {
                title: "داخل الملف نقوم بكتابة هذا المحتوى",
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: 4,
    title: "Props",
    img: require("./assets/intro.png"),
    data: [
       //what are props
       {
        type: "lesson",
        lessonData: [
          {
            title: "ما الذي تعنيه props ؟",
            desc: [
              {
                title: "Props is a short for properties.",
              },
              {
                title: "ال props هي إختصار ل properties والتي تعني خصائص.",
              },
            ],
            info: "properties = خصائص",
          },
          {
            title: "ما هي ال props ؟",
            desc: [
              {
                title: "Props are a mechanism for passing data from a parent component to a child component.",
              },
              {
                title: "وال props هي آلية لنقل البيانات من عنصر أب إلى عنصر إبن.",
              },
            ],
            info: "data = بيانات",
          },
        ],
      },
      {
        type: "exercise",
        exerciseData: [
          {
            question: "ما هو دور ال props ؟",
            answer: "نقل البيانات من العنصر الأب إلى العنصر الإبن",
            dir: "rtl",
            options: [
              "لإدارة ال state داخل ال component",
              "لتنسيق ال components",
              "للتعامل مع تفاعلات المستخدم",
              "نقل البيانات من العنصر الأب إلى العنصر الإبن",
            ],
          },
        ]
      },
      {
        type: "lesson",
        lessonData: [
          {
            title: "كيف نستخدم ال props ؟",
            desc: [
              {
                title: "لكي نستخدم ال props علينا تتبع 4 خطوات بسيطة:",
              },
              {
                title: "أولا صنع عنصر أب (العنصر الذي سوف يمرر ال props).",
              },
              {
                title: "العنصر الأب سوف يقوم باستيراد وعرض العنصر الإبن.",
              },
            ],
            info: "pass = يمرر",
            code: `
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return <ChildComponent />;
};

export default ParentComponent;            
            `
          },
        ],
      },
    ]
  },
  {
    id: 5,
    title: "State",
    img: require("./assets/intro.png"),
  },
  {
    id: 6,
    title: "React Hooks",
    img: require("./assets/hook.png"),
  },
  {
    id: 7,
    title: "Conditional Rendering",
    img: require("./assets/condition.png"),
  },
  {
    id: 8,
    title: "Lists & Keys",
    img: require("./assets/list.png"),
  },
  {
    id: 9,
    title: "Forms",
    img: require("./assets/intro.png"),
  },
  {
    id: 10,
    title: "Styling",
    img: require("./assets/intro.png"),
  },
  // {
  //   id: 11,
  //   title: "React Router",
  //   img: require("./assets/intro.png"),
  // },
  // {
  //   id: 12,
  //   title: "State Management",
  //   img: require("./assets/intro.png"),
  // },
];
