import {Outlet} from 'umi';
import './index.css'
import 'antd/es/style/themes/default.less';
import 'antd/dist/antd.less'; // 引入官方提供的 less 样式入口文件
import {
    HomeOutlined,
    MenuFoldOutlined, ReloadOutlined,
} from "@ant-design/icons";
import {Button, Divider, Drawer, message, Modal, Tooltip} from "antd";
import {useState} from "react";
import {useNavigate} from "@umijs/renderer-react";
import Title from "@/components/title";
import Collect from "@/components/collect";
import {DEFAULT_ROUTER} from "@/constant";
import {useLocalStorageState} from "ahooks";


const menuItems = [
    {
        label: '返回首页',
        icon: <HomeOutlined/>,
        link: '/'
    },
    // {
    //     label: '更新日志',
    //     icon: <BulbOutlined/>,
    //     link: '/update_history',
    // },
    // {
    //     label: '反馈',
    //     icon: <UserOutlined/>,
    //     link: '/help',
    // },
    // {
    //     label: '帮助',
    //     icon: <QuestionCircleOutlined/>,
    //     link: '/help',
    // },
    // {
    //     label: '设置',
    //     icon: <UserOutlined/>,
    //     link: '/setting',
    // },
]
export default function Layout() {
    //菜单
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    //将路由持久化
    const [routerList, setRouterList] = useLocalStorageState<any>(
        'routerList',
        {
            defaultValue: DEFAULT_ROUTER,
        },
    );
    //由主页面参数
    const context = {routerList}

    //链接跳转
    const navigate = useNavigate()
    const goToPage = (link: any) => {
        onClose()
        navigate(link)
    }
    //清楚网站缓存
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        //重置欢迎
        localStorage.removeItem("welcome")
        //重置你的收藏夹
        localStorage.removeItem("routerList")
        setIsModalOpen(false);

        //加个清除效果
        const hide = message.loading('正在删除', 0, () => {
            message.success('清除成功，即将自动刷新页面');
        });
        setTimeout(hide, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 1500)
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const clearWebkitData = () => {
        setIsModalOpen(true);
    }
    return (
        <div className={'main'}>
            <div className={'absolute right-1 md:right-3 top-3 flex-col flex'}>
                <Tooltip title="菜单" placement={"left"}>
                    <Button type="primary" shape="circle" icon={<MenuFoldOutlined/>} size={"large"}
                            onClick={showDrawer}/>
                </Tooltip>
                {/*<Tooltip title="设置" placement={"left"}>*/}
                {/*    <Button type="primary" shape="circle" className={'m-2'} icon={<SettingOutlined/>} size={"large"}/>*/}
                {/*</Tooltip>*/}
                <Tooltip title="清除网站缓存" placement={"left"}>
                    <Button type="primary" shape="circle" className={'mt-2'} icon={<ReloadOutlined/>} size={"large"}
                            onClick={clearWebkitData}/>
                </Tooltip>
            </div>
            <div className={'content'}>
                <Outlet context={context}/>
            </div>
            <Collect routerList={routerList} setRouterList={setRouterList}/>
            <Drawer
                width={300}
                onClose={onClose}
                open={open}
                closable={false}
            >
                <div>
                    <div className={'w-full flex-center text-3xl font-bold mb-3'}>
                        WoodBox
                    </div>
                    <div className={'flex-center flex-col'}>
                        {/*<Link to={'/login'}*/}
                        {/*      className={'text-gray-800 text-lg p-3 flex-center w-full hover:bg-gray-100 hover:text-gray-800'}*/}
                        {/*>*/}
                        {/*    <UserOutlined/>*/}
                        {/*    <span className={'ml-2'}>未登录</span>*/}
                        {/*</Link>*/}
                        <Divider/>
                        {
                            menuItems.map((item: any, index: number) => {
                                return (
                                    <div
                                        onClick={() => {
                                            goToPage(item?.link)
                                        }}
                                        key={index}
                                        className={'text-gray-800 text-lg p-3 flex-center w-full cursor-pointer hover:bg-gray-100'}
                                    >
                                        {item?.icon}
                                        <span className={'ml-2'}>{item?.label}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Drawer>
            <Modal title="清楚网站缓存"
                   open={isModalOpen}
                   onOk={handleOk}
                   onCancel={handleCancel}
                   okText={'确定'}
                   cancelText={'再思考一下'}
            >
                是否要清除浏览器缓存？该操作不会删除你的用户数据，清除数据后页面将会刷新
            </Modal>
        </div>
    );
}
