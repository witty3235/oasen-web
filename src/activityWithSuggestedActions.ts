import { Activity, Message } from 'botframework-directlinejs';

export function activityWithSuggestedActions(activities: Activity[]) {
    if (!activities || activities.length === 0) {
        return;
    }

    const lastActivity = activities[activities.length - 1];

    if (lastActivity.type === 'message'
        && lastActivity.suggestedActions
        && lastActivity.suggestedActions.actions.length > 0
    ) {
        return lastActivity;
    }
}



// WEBPACK FOOTER //
// ./~/tslint-loader??ref--0!./src/activityWithSuggestedActions.ts