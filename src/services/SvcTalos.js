module.exports = function SvcTalos(opts) {
    const { svcCache, queryHandler, mdlTest, db } = opts;
    async function getFromDB({ phone }) {
        //const token = await svcCache.getKV({ key: 'ELRP_TOKEN' });
        console.log("db tk");
        const result = await db["primary"].any(mdlTest.query, "");
        const response = result;
        return response;
    }

    return {
        getFromDB,
    };
};
