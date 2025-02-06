const budgetColumnData = (obj, selectLine) => {
    // 计算有几个月 PlanToStart -> PlanToComplete  默认为时间戳 结果向上取整
    let spentMonths = 0;
    if (obj.PlanToComplete != "" && obj.PlanToStart != "") {
        spentMonths = Math.ceil(
            Math.floor(
                ((obj.PlanToComplete - obj.PlanToStart) * 1000) / (24 * 3600 * 1000)
            ) / 30
        );
    } else {
        return `PlanToComplete or PlanToStart is null!`;
    }
    // 每月平均预算
    let averageBudget = 0;
    if (obj.BudgeTrial_CNY != "") {
        averageBudget = Number(obj.BudgeTrial_CNY / spentMonths);
    } else {
        return `BudgeTrial_CNY is null!`;
    }
    console.log(` 每月预算${averageBudget}：，时长：${spentMonths}月`);
    // 预算月份字段对应关系存储方便索引
    let monthsBudgetIndexArr = [{
            name: "JanAmountPaid",
            budget: "JanBudget",
        },
        {
            name: "FebAmountPaid",
            budget: "FebBudget",
        },
        {
            name: "MarAmountPaid",
            budget: "MarBudget",
        },
        {
            name: "AprAmountPaid",
            budget: "AprBudget",
        },
        {
            name: "MayAmountPaid",
            budget: "MayBudget",
        },
        {
            name: "JunAmountPaid",
            budget: "JunBudget",
        },
        {
            name: "JulAmountPaid",
            budget: "JulBudget",
        },
        {
            name: "AugAmountPaid",
            budget: "AugBudget",
        },
        {
            name: "SepAmountPaid",
            budget: "SepBudget",
        },
        {
            name: "OctAmountPaid",
            budget: "OctBudget",
        },
        {
            name: "NovAmountPaid",
            budget: "NovBudget",
        },
        {
            name: "DecAmountPaid",
            budget: "DecBudget",
        },
    ];

    // 找到当前编辑的列所在的下标
    let findSelectLineIndex = monthsBudgetIndexArr.findIndex((ele) => {
        return ele.name === selectLine;
    });
    console.log("__findSelectLineIndex_", findSelectLineIndex);
    let currentMonthPaid = Number(
        obj[monthsBudgetIndexArr[findSelectLineIndex].name]
    ); //当前月消费
    let currenMonthBudget = Number(
        obj[monthsBudgetIndexArr[findSelectLineIndex].budget]
    ); //当前预算
    console.log("__本月消费_", currentMonthPaid);
    // 边界判定 是一月
    if (findSelectLineIndex > 0) {
        // 判断当前月预算是否为空 ，为空意味着从本月开始是第开始月
        if (currenMonthBudget != "") {
            obj[monthsBudgetIndexArr[findSelectLineIndex + 1].budget] = String(
                averageBudget + currenMonthBudget - currentMonthPaid
            );
        } else {
            // 从本月开始
            obj[monthsBudgetIndexArr[findSelectLineIndex].budget] =
                String(averageBudget);
            obj[monthsBudgetIndexArr[findSelectLineIndex + 1].budget] = String(
                averageBudget + averageBudget - currentMonthPaid
            );
        }
    } else if (currentMonthPaid != "") {
        //  是一月 是否超额
        if (averageBudget - currentMonthPaid > 0) {
            obj[monthsBudgetIndexArr[findSelectLineIndex].budget] =
                String(averageBudget);
            obj[monthsBudgetIndexArr[findSelectLineIndex + 1].budget] = String(
                averageBudget + averageBudget - currentMonthPaid
            );
        } else {
            return `Budget excess`;
        }
    }

    // 对后续月份遍历
    let i = 1;
    let paidArr = [];
    while (obj[monthsBudgetIndexArr[findSelectLineIndex + i].name] != "") {
        paidArr.push(
            Number(obj[monthsBudgetIndexArr[findSelectLineIndex + i].name])
        );
        obj[monthsBudgetIndexArr[findSelectLineIndex + i + 1].budget] = String(
            Number(obj[monthsBudgetIndexArr[findSelectLineIndex + i].budget]) +
            currenMonthBudget -
            Number(obj[monthsBudgetIndexArr[findSelectLineIndex + i].name])
        );
        i++;
    }

    // 判断下个月是否有预算，有则遍历后续每个月到结束
    console.log(obj);
    return obj;
};

budgetColumnData({
        PlanToComplete: 1651449600, //5月2
        PlanToStart: 1641081600, //1月2日
        BudgeTrial_CNY: "10000",
        JanAmountPaid: "800",
        FebAmountPaid: "1000",
        MarAmountPaid: "500",
        AprAmountPaid: "",
        MayAmountPaid: "",
        JanBudget: "2000",
        FebBudget: "3500",
        MarBudget: "4500",
        AprBudget: "6000",
        MayBudget: "",
    },
    "JanAmountPaid"
);