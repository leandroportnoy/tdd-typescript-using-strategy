import PlansLimitsTypes from '../strategy/PlansLimitsTypes';
import PlanStrategy from '../strategy/PlanStrategy'

class MediumPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.MEDIUM;    }
}

export default MediumPlanStrategy;