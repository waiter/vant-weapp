export const button = Behavior({
    externalClasses: ['hover-class'],
    properties: {
        lang: {
            type: String,
            value: 'en'
        },
        businessId: Number,
        sessionFrom: String,
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean,
        appParameter: String,
        ariaLabel: String
    }
});
