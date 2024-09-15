#  aAgregation pipeline commands along with their use cases:

## $match: Filter Documents
Use Case: Filter documents based on certain criteria (similar to find).

## $group: Group Documents and Aggregate Data
Use Case: Group documents by a specific field and perform aggregation operations like sum, average, count, etc.

## $project: Shape the Output
Use Case: Select or exclude fields to return in the output documents.

## $sort: Sort Documents
Use Case: Sort documents by a field (ascending or descending).

## $limit: Limit the Number of Documents
Use Case: Restrict the number of documents returned in the pipeline.

## $unwind: Deconstruct an Array Field
Use Case: Unwind an array field into separate documents (creates one document for each array element).

## $lookup: Perform a Left Outer Join
Use Case: Join two collections together (similar to SQL joins).

## $addFields: Add New Fields to the Output
Use Case: Add calculated or derived fields to documents.

## $addToSet:
Purpose: Adds a value to an array only if the value is not already present in the array, ensuring that the array contains only unique elements.
Use Case: Useful when aggregating unique values from multiple documents. It’s typically used in the $group stage when you want to collect distinct values across documents.
