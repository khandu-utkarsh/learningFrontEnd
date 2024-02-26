//!Functions to get the information needed for loading

//!Global variables
const gridBoxHeight = 20;
const gridBoxWidth = 20;

let canvasElement,
  canvas2dCtx,
  canvasHeight,
  canvasWidth,
  totalRows,
  totalCols,
  gridMatrix,
  canvasTopLeftX,
  canvasTopLeftY;

let startListening = false;


function init() {
  canvasElement = document.querySelector("canvas");
  canvas2dCtx = canvasElement.getContext("2d");
  canvasHeight = canvasElement.height;
  canvasWidth = canvasElement.width;
  const canvasBoundingRect = canvasElement.getBoundingClientRect();
  //!Grid Dimensions:
  totalRows = canvasHeight / gridBoxHeight;
  totalCols = canvasWidth / gridBoxHeight;

  gridMatrix = [];
  for (let iRow = 0; iRow < totalRows; ++iRow) {
    let currRow = [];
    for (let iCol = 0; iCol < totalCols; ++iCol) {
      //!x coorinate
      currRow.push(0);
    }
    gridMatrix.push(currRow);
  }

  const canvasElementStyle = window.getComputedStyle(canvasElement);

  const topLeftCornerX = canvasBoundingRect.left;
  const topLeftCornerY = canvasBoundingRect.top;
  const paddingLeft = parseFloat(
    canvasElementStyle.getPropertyValue("padding-left")
  );
  const borderLeftWidth = parseFloat(
    canvasElementStyle.getPropertyValue("border-left-width")
  );
  const paddingTop = parseFloat(
    canvasElementStyle.getPropertyValue("padding-top")
  );
  const borderTopWidth = parseFloat(
    canvasElementStyle.getPropertyValue("border-top-width")
  );

  //!TODO: Take care of the scroll width
  canvasTopLeftX = topLeftCornerX + borderLeftWidth + paddingLeft;
  canvasTopLeftY = topLeftCornerY + borderTopWidth + paddingTop;
  startListening = true;
  //console.log(`Coordinates of top left corner: X: ${topLeftX}, Y: ${topLeftY}`);
}

//!Functions for constructing the Point
//!Note: x and y should be integer
function Point(x, y) {
  this.x = x;
  this.y = y;
}

function drawGirdLines() {
  canvas2dCtx.lineWidth = 1; //!This is line width in pixels

  //!Drawing columns:
  for (let iCol = 0; iCol <= totalCols; ++iCol) {
    //!Initial Point
    const lineStartX = iCol * gridBoxWidth;
    const lineStartY = 0;

    //!Final Point
    const lineEndX = lineStartX;
    const lineEndY = canvasHeight;

    canvas2dCtx.moveTo(lineStartX, lineStartY);
    canvas2dCtx.lineTo(lineEndX, lineEndY);
  }

  canvas2dCtx.strokeStyle = "black";
  canvas2dCtx.stroke();

  //!Drawing rows:
  for (let iRow = 0; iRow <= totalRows; ++iRow) {
    //!Initial Point
    const lineStartX = 0;
    const lineStartY = iRow * gridBoxHeight;

    //!Final Point
    const lineEndX = canvasWidth;
    const lineEndY = lineStartY;

    canvas2dCtx.moveTo(lineStartX, lineStartY);
    canvas2dCtx.lineTo(lineEndX, lineEndY);
  }

  canvas2dCtx.strokeStyle = "black";
  canvas2dCtx.stroke();
}

function getClickPositionRelativeToCanvas(event) {
  //!Top left corner position (includes padding as well as boder width).

  //!windows x point and windows y point

  const xPos = event.clientX; //!These are relative coordinates, what does the relative word mean?
  const yPos = event.clientY; //!These are relative coordinates, what does the relative word mean?

  //console.log(`X position ${xPos}, Y position: ${yPos}`);

  const xPosRel = xPos - canvasTopLeftX;
  const yPosRel = yPos - canvasTopLeftY;

  //console.log(`Relative: X position ${xPosRel}, Y position: ${yPosRel}`);
  return new Point(xPosRel, yPosRel);
}

//!Find the mose position, now select the starting point

function selectGridBox(event) {
  // console.log(`Entering`);
  const positionInput = getClickPositionRelativeToCanvas(event);
  const xPos = positionInput.x;
  const yPos = positionInput.y;

  //!Let's use the most inefficient method right now, and go through the for loop to find it
  let selectedRow = -1;
  for (let iRow = 0; iRow < totalRows; ++iRow) {
    const rowStartY = gridBoxHeight * iRow;
    const rowEndY = gridBoxHeight * (iRow + 1);

    if (rowStartY <= yPos && yPos < rowEndY) {
      //!This is the row;
      selectedRow = iRow;
      break;
    }
  }

  //!Find between which column things lie:
  let selectedCol = -1;
  for (let iCol = 0; iCol < totalCols; ++iCol) {
    const colStartX = gridBoxWidth * iCol;
    const colEndY = gridBoxWidth * (iCol + 1);

    if (colStartX <= xPos && xPos < colEndY) {
      //!This is the col;
      selectedCol = iCol;
      break;
    }
  }

  console.log(`Selected row: ${selectedRow}, Selected column: ${selectedCol}`);

  if (selectedRow !== -1 && selectedCol !== -1) {
    //!Color this square:
    canvas2dCtx.fillStyle = "blue";

    // console.log(
    //   `Coordinates provided to the fillRect method: ${
    //     selectedRow * gridBoxHeight
    //   } ${selectedCol * gridBoxWidth} ${gridBoxWidth} ${gridBoxHeight}`
    // );
    canvas2dCtx.fillRect(
      selectedCol * gridBoxWidth,
      selectedRow * gridBoxHeight,
      gridBoxWidth,
      gridBoxHeight
    );
  }

  //!Return the selected square:
  const seletedData = new Point(selectedCol, selectedRow);

  startListening = false;

  //!Call the method for computing SAW

  let orderedSAWPoints = getSelfAvoidingWalks(seletedData, gridMatrix);
  orderedSAWPoints.forEach((element) => {
    canvas2dCtx.fillRect(
      element.x * gridBoxWidth,
      element.y * gridBoxHeight,
      gridBoxWidth,
      gridBoxHeight
    );
  });
}

//!Code for SAW
function getNextPointInSAW(currPoint, matrix) {
  let matrixRows = matrix.length;
  let matrixCols = matrix[0].length;

  const allDirections = [
    new Point(1, 0),
    new Point(0, 1),
    new Point(-1, 0),
    new Point(0, -1),
  ]; //!Array of directions (Using Point as vector as well).
  let availableDirections = [];

  let allNewPoints = [];
  for (let iDir = 0; iDir < 4; ++iDir) {
    let currDir = allDirections[iDir];
    let newPoint = new Point(currPoint.x, currPoint.y);
    newPoint.x = newPoint.x + currDir.x;
    newPoint.y = newPoint.y + currDir.y;
    allNewPoints.push(newPoint);
    if (
      newPoint.x >= 0 &&
      newPoint.x < matrixCols &&
      newPoint.y >= 0 &&
      newPoint.y < matrixRows
    ) {
      if (matrix[newPoint.x][newPoint.y] == 0) {
        availableDirections.push(currDir);
      }
    }
  }

  if (availableDirections.length === 0) {
    return { status: false, nextPoint: currPoint };
  }

  const indexForNextDir = Math.floor(
    Math.random() * availableDirections.length
  );
  newDirection = availableDirections[indexForNextDir];
  newPoint = new Point(currPoint.x, currPoint.y);
  newPoint.x += newDirection.x;
  newPoint.y += newDirection.y;
  return { status: true, nextPoint: newPoint };
}

function getSelfAvoidingWalks(startPoint, matrix) {
  let matrixRows = matrix.length;
  let matrixCols = matrix[0].length;

  let currPoint = startPoint;
  //!Mark this point
  matrix[currPoint.x][currPoint.y] = 1;

  let SAWPointsInOrder = [];
  SAWPointsInOrder.push(currPoint);

  //!For testing let us only have of value 10.
  while (true) {
    //  for (let iPoint = 0; iPoint < 10; ++iPoint) {
    let { status, nextPoint } = getNextPointInSAW(currPoint, gridMatrix);
    if (!status) break;
    SAWPointsInOrder.push(nextPoint);
    matrix[nextPoint.x][nextPoint.y] = 1;
    currPoint = Object.assign({}, nextPoint);
  }
  //console.log(`All points found in SAW`);
  console.log(`Total points in SAW: ${SAWPointsInOrder}`);
  return SAWPointsInOrder;
}

init();
drawGirdLines();
canvasElement.addEventListener("click", selectGridBox, {once: startListening});

let tempVar = 0;

//!Code is working TODO:
//1. Add animation so line by line plotting is done
//2. Add gaps between the boxes so that we can see the difference
//3. Accept no input once it is done, until reset is clicked.


//!Only open for selection once user has clicked on select
//!Only start SAW once, user click on start
//!Reset everything, once rest is clicked