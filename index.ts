import * as pinecone from "@pinecone-database/pulumi";

// Provision Pinecone index
const pineconeIndex = new pinecone.PineconeIndex("pinecone-index", {
	name: process.env.PINECONE_INDEX as unknown as string,
	metric: pinecone.IndexMetric.Cosine,
	dimension: 384,
	spec: {
		serverless: {
			cloud: pinecone.ServerlessSpecCloud.Aws,
			region: process.env.AWS_REGION as unknown as string,
		},
	},
});
export const output = {
	name: pineconeIndex.name,
};
