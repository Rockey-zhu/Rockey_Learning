<template>
<div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <br>
    <Row>
        <Col span="11">
            <Card>
                <p slot="title">The standard card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">Disable card with hover shadows</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>
    <br>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
    </Row>
    <br>
     <Card style="width:320px">
        <div style="text-align:center">
            <img href="../../images/logo.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>

<br>
 <Collapse v-model="value1">
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
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
</template>
<script>
    export default {
        data () {
            return {
                    value:'1',
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'Schindlers List',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>