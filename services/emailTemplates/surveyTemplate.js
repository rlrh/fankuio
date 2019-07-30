const keys = require("../../config/keys");

module.exports = body => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>We would like your feedback!</h3>
                    <p>Please answer the following question:</p>
                    <p>${body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/received">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/received">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};