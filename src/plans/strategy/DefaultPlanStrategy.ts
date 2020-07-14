import PlansLimitsTypes from '../strategy/PlansLimitsTypes';
import PlanStrategy from '../strategy/PlanStrategy'

class DefaultPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.DEFAULT;
    }
}

export default DefaultPlanStrategy;