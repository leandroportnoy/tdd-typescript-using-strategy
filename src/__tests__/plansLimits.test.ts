import PlansLimits from '../plansLimits';
import LowPlanStrategy from '../plans/strategy/LowPlanStrategy';
import MediumPlanStrategy from '../plans/strategy/MediumPlanStrategy';
import NormalPlanStrategy from '../plans/strategy/NormalPlanStrategy';
import RenovationPlanStrategy from '../plans/strategy/RenovationPlanStrategy';
import NonrenovationPlanStrategy from '../plans/strategy/NonrenovationPlanStrategy';

describe('get best situation of plans', () => {
    test('if your consumption is below 10 percent else show the renovation message', () => {
        const limits = new PlansLimits(new RenovationPlanStrategy());
        expect(limits.getPlanStrategy().getSituation()).toBe('renovation');
    });

    test('if your consumption is between 10 and 20 percent else show the low message', () => {
        const limits = new PlansLimits(new LowPlanStrategy());
        expect(limits.getPlanStrategy().getSituation()).toBe('low');
    });

    test('if your consumption is between 20 and 40 percent else show the medium message', () => {
        const limits = new PlansLimits(new MediumPlanStrategy());
        expect(limits.getPlanStrategy().getSituation()).toBe('medium');
    });

    test('if your consumption is between 40 and 60 percent else show the normal message', () => {
        const limits = new PlansLimits(new NormalPlanStrategy());
        expect(limits.getPlanStrategy().getSituation()).toBe('normal');
    });

    test('if your consumption is above 60 percent else show the non-renovation', () => {
        const limits = new PlansLimits(new NonrenovationPlanStrategy());
        expect(limits.getPlanStrategy().getSituation()).toBe('nonrenovation');
    });
})