import { PropsWithChildren } from 'react';
import { CommonSection } from '../common/CommonSection';
import PresentationRow from './row';
import { IPresentation } from './IPresentation';

export const Presentation = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IPresentation.Payload }>) {
  if (payload?.disable) {
    return <></>;
  }

  return (
    <CommonSection title="BLOG">
      <PresentationRow payload={payload} />
    </CommonSection>
  );
}
