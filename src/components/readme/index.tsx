import MyCard from "@/components/my-card";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import './index.css'

export default function Readme(props: any) {
    const {explain} = props
    return (
        <MyCard title={'说明文档'} icon={<ExclamationCircleOutlined/>}>
            <div>
                {
                    explain.split('\n').map((item:any,index:any) => {
                        return (
                            <div key={index} className={'explain-li text-lg'}>
                                {
                                    item
                                }
                            </div>
                        )
                    })
                }
            </div>
        </MyCard>
    );
}
