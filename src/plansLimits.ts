import PlanStrategy from '../src/plans/strategy/PlanStrategy';

class PlansLimits {

    public planStrategy: PlanStrategy;

    constructor(planStrategy: PlanStrategy) {
        this.planStrategy = planStrategy;
    }

    getPlanStrategy(): PlanStrategy {
        return this.planStrategy;
    }

    // verifyLimit(value: number) {
    //     if (value <= 10) return "renovation";
    //     if (value > 10 && value <= 20) return "low";
    //     if (value > 20 && value <= 40) return "medium";
    //     if (value > 40 && value <= 60) return "normal";
    //     return "non-renovation";
    // }
}

export default PlansLimits;