import FeedService from "../../../services/FeedService";
import StatusService from "../../../services/StatusService";

export const getFeedList = async (req, res) => {
	const returnData = await FeedService.getFeedList(Number(req.user.userID), req.body, req.query);
	StatusService.buildResponse(returnData, res);
}