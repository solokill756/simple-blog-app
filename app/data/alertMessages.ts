import type { TFunction } from 'i18next';

export const getAlertMessages = (t: TFunction): Record<string, string> => ({
  postCreated: t('postCreated'),
  errorOccurred: t('errorOccurred'),
  postDeleted: t('postDeleted'),
  postUpdated: t('postUpdated'),
  postDeletedError: t('postDeletedError'),
});
