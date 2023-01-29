import {
  UserFlowContext,
  UserFlowInteractionsFn,
  UserFlowProvider,
} from '@push-based/user-flow';

const interactions: UserFlowInteractionsFn = async (
  ctx: UserFlowContext
): Promise<any> => {
  const { flow, collectOptions } = ctx;
  const { url } = collectOptions;

  await flow.navigate(url, {
    stepName: `Navigate to ${url}`,
  });

  await flow.navigate('https://d2yeie3sfgsrg6.cloudfront.net', {
    stepName: `Navigate to https://d2yeie3sfgsrg6.cloudfront.net`,
  });
};

const userFlowProvider: UserFlowProvider = {
  flowOptions: { name: 'Cold and hot navigations' },
  interactions,
};

module.exports = userFlowProvider;
