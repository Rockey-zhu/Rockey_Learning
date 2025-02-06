<template>
<div>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
         <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button loading shape="circle"></Button>
    <Button loading shape="circle" type="primary"></Button>
    <br><br>
    <ButtonGroup vertical>
        <Button icon="logo-facebook"></Button>
        <Button icon="logo-twitter"></Button>
        <Button icon="logo-googleplus"></Button>
        <Button icon="logo-tumblr"></Button>
    </ButtonGroup>
    <br>
     <Button to="/components/icon-en">普通跳转</Button>
    <Button to="/components/icon-en" replace>不保存历史记录跳转</Button>
    <Button to="//iviewui.com" target="_blank">新窗口打开</Button>
    
    <br><br>
    <div>
         <font>Grid栅格</font>
         <Row>
             <Col span="12" class="col1">
             <div>1111</div>
             </Col>
             <Col span="12" class="col2">col-12</Col>
         </Row>
         <br>
         <Row>
				<Col span="8">col-8</Col>
				<Col span="8" class="col1">col-8</Col>
				<Col span="8">col-8</Col>
			</Row>
			<br>
			<Row>
				<Col span="6" class="col1">col-6</Col>
				<Col span="6">col-6</Col>
				<Col span="6" class="col1">col-6</Col>
				<Col span="6">col-6</Col>
			</Row>
            <Row :gutter="16">
                <Col span="6">
			<div>col-6</div>
			</Col>
			<Col span="6" class="col1">
			<div>col-6</div>
			</Col>
			<Col span="6">
			<div>col-6</div>
			</Col>
			<Col span="6" class="col1">
			<div>col-6</div>
			</Col>
            </Row>
            <br>
            <Collapse accordion v-model="value3">
        <Panel name="1">
            史蒂夫·乔布斯
            <div slot="content">
                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
                <Collapse accordion v-model="value4">
                    <Panel name="1-1">
                        iPhone
                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>
                    </Panel>
                    <Panel name="1-2">
                        iPad
                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>
                    </Panel>
                </Collapse>
            </div>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
    </Collapse>
    </div>
        </div>
</template>
<script>
    export default{
        data() {
            return {
                value3:'1',
                value4:'1-1',
                loading:false,
                loading2:false
            }
        },
        methods: {
            toLoading(){
                this.loading=true;
            },
            toLoading2(){
                this.loading2=true;
            }
        }
    }
</script>
<style scoped>
	.col1 {
		background-color: red;
	}

	.col2 {
		background-color: black;
	}

</style>