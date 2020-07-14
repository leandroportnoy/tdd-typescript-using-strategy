import PlansLimitsTypes from '../strategy/PlansLimitsTypes';
import PlanStrategy from '../strategy/PlanStrategy'

class RenovationPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.RENOVATION;
    }
}

export default RenovationPlanStrategy;