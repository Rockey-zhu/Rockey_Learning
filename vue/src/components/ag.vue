<template>
<div>
    <Cascader :data="data" v-model="value"></Cascader>
    <div>
		<Button>Default</Button>
		<Button type="primary">Primary</Button>
		<Button type="dashed">Dashed</Button>
		<Button type="text">Text</Button>
        <br><br>
		<Button type="info">Info</Button>
		<Button type="success">Success</Button>
		<Button type="warning">Warning</Button>
		<Button type="error">Error</Button>
		<br><br>
    <Button type="default" ghost>Default</Button>
    <Button type="primary" ghost>Primary</Button>
    <Button type="dashed" ghost>Dashed</Button>
    <Button type="text" ghost>Text</Button>
    <Button type="info" ghost>Info</Button>
    <Button type="success" ghost>Success</Button>
    <Button type="warning" ghost>Warning</Button>
    <Button type="error" ghost>Error</Button>

    <br><br>
     <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button shape="circle" icon="ios-search"></Button>
    <Button icon="ios-search">Search</Button>
    <Button shape="circle" icon="ios-search">Search</Button>
    <Button shape="circle">Circle</Button>
    <br><br>
     <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>

    <br><br>
    <button>Default</button>
    <button disabled>Default(disabled)</button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>

    <br><br>
     <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
    <Page :total="100" show-sizer />
    <br>
     <Badge :count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge :count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
        </div>
</div>

</template>
<script>
    export default{
        data(){
            return{
                vaulve:['jiangsu','suzhou','zhuozhengyuan'],
                data:[{
                    vaulve:'beijing',
                    label:'北京',
                    children:[
                        {
                            value:'gugong',
                            label:'故宫'
                        },
                        {
                            value:'tiantan',
                            label:'天坛'
                        },
                        {
                           value:'wangfujing',
                            label:'王府井'
                        }
                    ]
                },{
                    value:'jiangsu',
                    label:'江苏',
                    children:[
                        {
                            value:'nanjing',
                            label:'南京',
                            children:[
                                {
                                    value:'fuzimiao',
                                    label:'夫子庙'
                                }
                            ]
                        },
                        {
                            value:'suzhou',
                            label:'苏州',
                            children:[
                                {
                                    value:'zhuozhengyuan',
                                    label:'拙政园'
                                },
                                {
                                    value:'shizilin',
                                    label:'狮子林'
                                }
                            ]
                        }
                    ]
                }]
            }
        }
    }
</script>
