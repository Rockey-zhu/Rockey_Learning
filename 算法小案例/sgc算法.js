// sgc 表单项目可能用到的函数预整理
/**
 * 计算每个月的可用余额
 * @param  {Array}monthlyConsumption 每月开支
 * @returns {Array} [每个月的可用余额],超支当月返回null并结束
 */
const getBalance = (monthlyConsumption, averageExpenditure) => {
    let monthNumber = monthlyConsumption.length; //月数
    let availableBalance = []; //每月结余
    let summaryBalance = 0; //总结余
    if (monthNumber > 0) {
        for (let i = 0; i < monthNumber; i++) {
            summaryBalance += averageExpenditure;
            console.log(`第${i + 1}个月可用费用：${summaryBalance}`);
            if (monthlyConsumption[i] <= summaryBalance) {
                summaryBalance = summaryBalance - monthlyConsumption[i];
                console.log(
                    `第${i + 1}个月花费 ${monthlyConsumption[i]},结余：${summaryBalance}`
                );
                availableBalance.push(summaryBalance);
            } else {
                availableBalance.push(null);
                return availableBalance;
            }
        }
    }
    return availableBalance;
};


getBalance([50, 52, 59, 100, 200, 210, 400, 600, 500], 200)
    // console.log("getBalance", getBalance.availableBalance)