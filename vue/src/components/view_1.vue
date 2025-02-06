<template>
<div>
    <Progress :percent="25" :stroke-width="20" text-inside />
    <Progress :percent="45" :stroke-width="20" status="active" text-inside />
    <Progress :percent="65" :stroke-width="20" status="wrong" text-inside />
    <Progress :percent="100" :stroke-width="20" text-inside />
    <div>
    <Tag color="default">default</Tag>
    <Tag color="primary">primary</Tag>
    <Tag color="success">success</Tag>
    <Tag color="error">error</Tag>
    <Tag color="warning">warning</Tag>
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="yellow">yellow</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
    <Tag color="#FFA2D3">Custom Color</Tag>
    <br><br>
    <Tag type="border" closable color="primary">标签一</Tag>
    <Tag type="border" closable color="success">标签二</Tag>
    <Tag type="border" closable color="error">标签三</Tag>
    <Tag type="border" closable color="warning">标签四</Tag>
    <br><br>
    <Tag type="dot" closable color="primary">标签一</Tag>
    <Tag type="dot" closable color="success">标签二</Tag>
    <Tag type="dot" closable color="error">标签三</Tag>
    </div>
    <br>
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>

    <br>
     <Timeline>
        <TimelineItem color="green">
            <Icon type="ios-trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
    </Timeline>
    <br>
     <Time :time="time3" :interval="1" />
    </div>
</template>
<script>
    export default {
         data () {
            return {
                value1: 0,
                time3: new Date()
            }
        }
    }
</script>
<style>
    .demo-carousel{
        background-color: blue;
        width:300px;
        height: 200px;
        margin:  0 auto;
    }
</style>