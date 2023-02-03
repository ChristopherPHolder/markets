import {
  UserFlowContext,
  UserFlowInteractionsFn,
  UserFlowProvider,
} from '@push-based/user-flow';

const interactions: UserFlowInteractionsFn = async (
  ctx: UserFlowContext
): Promise<void> => {
  const { flow, collectOptions } = ctx;
  const { url } = collectOptions;

  await flow.navigate(url, {
    stepName: `Navigate to ${url}`,
  });

  await flow.navigate(url, {
    stepName: `Navigate to ${url}`,
  });
};

const userFlowProvider: UserFlowProvider = {
  flowOptions: { name: 'Cold and hot navigations' },
  interactions,
};

module.exports = userFlowProvider;
