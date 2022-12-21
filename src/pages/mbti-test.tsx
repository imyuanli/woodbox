// import Title from "@/components/title";
// import MyCard from "@/components/my-card";
// import {Button, Progress, Steps} from "antd";
// import {useEffect, useState} from "react";
// import Loading from "@/components/loading";
// import {ArrowLeftOutlined, CheckCircleOutlined, EditOutlined} from "@ant-design/icons";
// import {get_mbti_questions} from "@/service/juheapi/service";
// import Readme from "@/components/readme";
// import {getPercentage} from "@/utils";
//
// export default function SimpWords() {
//     //题目列表
//     const [question, setQuestion] = useState<any>([])
//     //当前题目
//     const [current, setCurrent] = useState(0)
//     //选的答案
//     const [result, setResult] = useState<any>([])
//     //生成的报告
//     const [report, setReport] = useState<any>(null)
//
//     //选择测试的题目
//     const [loading, setLoading] = useState<any>(false)
//     //选择题目
//     const getTestQuestion = (level?: any) => {
//         setLoading(true)
//         setTimeout(() => {
//             if (level) {
//                 setQuestion([
//                     {
//                         "q": "计划一个旅程时候，你喜欢",
//                         "a": "大部分时间跟当天感觉行事",
//                         "b": "事先知道大部分日子做什么",
//                         "ia": "Z3Yh",
//                         "ib": "6w7I"
//                     },
//                     {
//                         "q": "下面每一对词语中，哪个词语更合你心意",
//                         "a": "有条不紊",
//                         "b": "不拘小节",
//                         "ia": "neoq",
//                         "ib": "2A3S"
//                     },
//                     {
//                         "q": "你做事多数是",
//                         "a": "按当天心情去做",
//                         "b": "照拟好的程序表去做 ",
//                         "ia": "zeAw",
//                         "ib": "ZrYz"
//                     },
//                     {
//                         "q": "一般来说，你和哪些人比较合得来？",
//                         "a": "现实的人",
//                         "b": "富于想象的人",
//                         "ia": "lumj",
//                         "ib": "TISs"
//                     },
//                     {
//                         "q": "你会跟哪些人做朋友",
//                         "a": "常提出新主意的",
//                         "b": "脚踏实地的",
//                         "ia": "6R7R",
//                         "ib": "HWJh"
//                     },
//                     {
//                         "q": "哪一个答案最贴切描绘你一般的感受或行为",
//                         "a": "想象的",
//                         "b": "真实的",
//                         "ia": "eOfS",
//                         "ib": "njoC"
//                     },
//                     {
//                         "q": "与很多人一起会",
//                         "a": "令你活力倍增",
//                         "b": "常常令你心力交瘁",
//                         "ia": "JqKx",
//                         "ib": "puqp"
//                     },
//                     {
//                         "q": "下面每一对词语中，哪个词语更合你心意",
//                         "a": "注重隐私",
//                         "b": "坦率开放",
//                         "ia": "bQaH",
//                         "ib": "SATH"
//                     },
//                     {
//                         "q": "你是否",
//                         "a": "可以和任何人按需求从容地交谈",
//                         "b": "只是对某些人或在某种情况下才可以畅所欲",
//                         "ia": "U5V2",
//                         "ib": "fmgh"
//                     },
//                     {
//                         "q": "下面每一对词语中，哪个词语更合你心意",
//                         "a": "具分析力",
//                         "b": "多愁善感",
//                         "ia": "YWYe",
//                         "ib": "wjvj"
//                     },
//                     {
//                         "q": "哪一个答案最贴切描绘你一般的感受或行为",
//                         "a": "公正的",
//                         "b": " 有关怀心",
//                         "ia": "LEN0",
//                         "ib": "ZaYe"
//                     },
//                     {
//                         "q": "哪一个答案最贴切描绘你一般的感受或行为",
//                         "a": "坚持己见",
//                         "b": "温柔有爱心",
//                         "ia": "MPLB",
//                         "ib": "OiPe"
//                     }
//                 ])
//             } else {
//                 setQuestion([
//                     {
//                         "q": "当你有一份特别的任务，你会喜欢",
//                         "a": "开始前小心组织计划",
//                         "b": "边做边须做什么",
//                         "ia": "jDiL",
//                         "ib": "GbGX"
//                     },
//                     {
//                         "q": "你通常较喜欢的科目是",
//                         "a": "讲授概念原则的",
//                         "b": "讲授事实数据的",
//                         "ia": "LQMU",
//                         "ib": "z5xK"
//                     },
//                     {
//                         "q": "下面每一对词语中，哪个词语更合你心意",
//                         "a": "文静",
//                         "b": "外向",
//                         "ia": "5M4T",
//                         "ib": "fjgg"
//                     },
//                     {
//                         "q": "下面每一对词语中，哪个词语更合你心意",
//                         "a": "客观的",
//                         "b": "热情的",
//                         "ia": "H0Gi",
//                         "ib": "LgKg"
//                     }
//                 ])
//             }
//         }, 2000)
//     }
//
//     //下一题
//     const onNextQuestion = (option: any, choice: any) => {
//         if (current <= question.length - 1) {
//             //选的值
//             const res = [...result]
//             res[current] = {
//                 choice,
//                 option
//             }
//             setResult([...res])
//             //更改当前指向
//             setCurrent(current + 1)
//         }
//     }
//
//     //返回上一题
//     const onPrevQuestion = () => {
//         setCurrent(current - 1)
//     }
//
//     const [loadingReport, setLoadingReport] = useState(false)
//     //生成结果
//     const getTestReport = () => {
//         setLoadingReport(true)
//         setTimeout(() => {
//             setReport({
//                 "alphabet": "ISTJ",
//                 "vocabulary": "Logistician",
//                 "occupation": "物流师",
//                 "summarize": [
//                     "物流师 (ISTJ)是具有内向、观察力、思考力和判断力的人格特质的人。这些人往往内敛而任性，对生活有着理性的看法。他们仔细地组织他们的行动，并有条不紊地执行它们。"
//                 ],
//                 "desc": [
//                     "物流师以他们的诚信为荣。具有这种性格类型的人言出必行，当他们承诺做某事时，他们一定会坚持到底。",
//                     "这种性格类型占总人口的很大一部分，虽然后勤人员可能不是特别浮华或寻求关注，但他们在保持社会稳固、稳定的基础上所做的不仅仅是他们的职责。在他们的家庭和社区中，物流师通常因其可靠性、实用性以及即使在压力最大的情况下也能保持脚踏实地和合乎逻辑的能力而赢得尊重。"
//                 ],
//                 "characteristic": [
//                     {
//                         "title": "诚信生活",
//                         "desc": [
//                             "物流师自尊的核心来自于个人诚信。具有这种性格类型的人相信在任何情况下都有正确的方法来进行——任何假装不这样的人都可能试图改变规则以适应自己的目的。物流师非常尊重结构和传统，他们经常被提供明确等级和期望的组织、工作场所和教育环境所吸引。",
//                             "物流师性格类型的人很少会犹豫对自己的行为和选择负责。一般来说，他们很快就会承认自己的错误，承认事实，即使这不会让他们看起来很好。对物流师来说，诚实远比炫技重要，他们宁愿满足自己的良心，也不愿撒谎给别人留下好印象。",
//                             "因为他们无论如何都努力履行自己的义务，物流师的个性经常被那些未能将自己保持在同一标准的人所困惑。有时，后勤人员可能会不公平地误判那些无法与他们严格的自我控制相匹配的人——怀疑某人在实际应对其他挑战时是懒惰或不诚实。即使后勤人员不大声说出这些判断，他们的蔑视也可以通过任何方式传达出来，从而为他们赢得了有点严格或冷漠的名声。"
//                         ]
//                     },
//                     {
//                         "title": "收拾残局",
//                         "desc": [
//                             "物流师的奉献精神是一种令人钦佩的品质，它推动了他们的许多成就。但它也可能成为其他人利用的弱点。凭借其强烈的职业道德和责任感，后勤人员可能会经常发现自己肩负着他人的责任。即使他们不抱怨这种情况，如果物流人员不断被期望——或自己承担——为他们的同事、朋友或亲人收拾残局，他们最终可能会筋疲力尽或气馁。",
//                             "物流师并不以容易表达自己的情绪而闻名，但这并不意味着具有这种性格类型的人在承受超过体重时不会感到沮丧或怨恨。除非他们确保他们的关系是平衡和可持续的，否则后勤人员最终可能会损害他们认为需要保护的稳定性。好消息是，通过学习设定适当的界限并在他们过度紧张时大声疾呼，物流师可以为世界提供他们许多天赋的全部好处，包括他们的清晰性、忠诚度和可靠性。"
//                         ]
//                     }
//                 ]
//             })
//             setLoadingReport(false)
//         }, 1500)
//     }
//     return (
//         <div>
//             <Title value={'MBTI测试'}/>
//             <MyCard title={'测试列表'} icon={<EditOutlined/>}>
//                 <div className={'flex justify-center items-center w-full flex-col'}>
//                     {
//                         loading ?
//                             question.length > 0 ?
//                                 <>
//                                     {
//                                         current > question.length - 1 ?
//                                             <div className={'flex flex-col justify-center items-center '}>
//                                                 <div className={'mb-3 text-2xl flex flex-col mb-3'}>
//                                                     <CheckCircleOutlined className={'text-6xl text-blue-500'}/>
//                                                     <span>完成测试</span>
//                                                 </div>
//                                                 <Button onClick={getTestReport}>生成测试报告</Button>
//                                             </div>
//                                             :
//                                             <>
//                                                 <div className={'w-full flex justify-center items-center mb-3'}>
//                                                     <div className={'mr-3'}>
//                                                         <span className={'text-xl text-blue-500'}>{current + 1}</span>
//                                                         /
//                                                         <span className={'text-lg'}>{question.length}</span>
//                                                     </div>
//                                                     <Progress percent={getPercentage(current, question.length)}
//                                                               showInfo={false}/>
//                                                 </div>
//                                                 <div className={'text-2xl mb-3'}>
//                                                     {question[current]["q"]}
//                                                 </div>
//                                                 <div className={'flex justify-center items-center flex-wrap mb-3'}>
//                                                     <Button
//                                                         size={'large'}
//                                                         className={'m-2'}
//                                                         type={result[current]?.choice == "a" ? "primary" : "default"}
//                                                         onClick={() => {
//                                                             onNextQuestion(question[current]["ia"], "a")
//                                                         }}
//                                                     >
//                                                         {question[current]["a"]}
//                                                     </Button>
//                                                     <Button
//                                                         size={'large'}
//                                                         className={'m-2'}
//                                                         type={result[current]?.choice == "b" ? "primary" : "default"}
//                                                         onClick={() => {
//                                                             onNextQuestion(question[current]["ib"], "b")
//                                                         }}
//                                                     >
//                                                         {question[current]["b"]}
//                                                     </Button>
//                                                 </div>
//                                                 <div>
//                                                     {
//                                                         current > 0 && <Button type={'text'} icon={<ArrowLeftOutlined/>}
//                                                                                onClick={onPrevQuestion}>返回上一题</Button>
//                                                     }
//                                                 </div>
//                                             </>
//                                     }
//                                 </>
//                                 :
//                                 <Loading text={'正在加载测试题'}/>
//                             :
//                             <div className={'flex flex-col justify-center items-center '}>
//                                 <div className={'text-2xl mb-3'}>
//                                     请选择你要进行的测试题
//                                 </div>
//                                 <div className={'flex justify-center items-center flex-wrap mb-3'}>
//                                     <Button
//                                         size={'large'}
//                                         className={'m-2'}
//                                         onClick={() => {
//                                             getTestQuestion()
//                                         }}
//                                     >
//                                         快速测试（仅4题）
//                                     </Button>
//                                     <Button
//                                         size={'large'}
//                                         className={'m-2'}
//                                         onClick={() => {
//                                             getTestQuestion("senior")
//                                         }}
//                                     >
//                                         完整测试（12题）
//                                     </Button>
//                                 </div>
//                             </div>
//                     }
//
//                 </div>
//             </MyCard>
//             {
//                 (loadingReport || report) &&
//                 <MyCard title={'测试结果'} icon={<EditOutlined/>}>
//                     {
//                         loadingReport ?
//                             <Loading text={"正在计算你的人格，请稍等"}/>
//                             :
//                             <div>报告</div>
//                     }
//                 </MyCard>
//             }
//             <Readme explain={'根据用户填写的心理测试题，经过MBTI理论和指标模型的分析，最终得到人格测试报告。\n' + '测得的结果仅供参考娱乐。'}/>
//         </div>
//     );
// }
