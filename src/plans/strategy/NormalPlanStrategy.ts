import PlansLimitsTypes from '../strategy/PlansLimitsTypes';
import PlanStrategy from '../strategy/PlanStrategy'

class NormalPlanStrategy implements PlanStrategy {
    public getSituation(): String {
        return PlansLimitsTypes.NORMAL;    
    }
}

export default NormalPlanStrategy;