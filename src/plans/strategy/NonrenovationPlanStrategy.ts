import PlansLimitsTypes from './PlansLimitsTypes';
import PlanStrategy from './PlanStrategy'

class NonrenovationPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.NONRENOVATION;
    }
}

export default NonrenovationPlanStrategy;