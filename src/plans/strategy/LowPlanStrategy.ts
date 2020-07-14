import PlansLimitsTypes from '../strategy/PlansLimitsTypes';
import PlanStrategy from '../strategy/PlanStrategy'

class LowPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.LOW;
    }
}

export default LowPlanStrategy;