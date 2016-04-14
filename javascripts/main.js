var vectors = [];

function onClick () {
    if (vectors.length == 3) {
        return;
    }

    var x = document.form.x.value,
        y = document.form.y.value,
        z = document.form.z.value;
    var point = new Vec3(x, y, z);
    vectors.push(point);

    var pointContainer = document.getElementById("point_container");

    var row = pointContainer.insertRow(vectors.length - 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.appendChild(document.createTextNode(vectors.length));
    cell2.appendChild(document.createTextNode(point));
}

function cal () {
    if (vectors.length < 3) {
        alert('The all points is already registered');
        return;
    }
    var p1 = vectors[0];
    var p2 = vectors[1];
    var p3 = vectors[2];

    var A = new Vec3(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
    var B = new Vec3(p3.x - p1.x, p3.y - p1.y, p3.z - p1.z);

    var g = new Vec3(A.y * B.z - A.z * B.y, A.z * B.x - A.x * B.z, A.x * B.y-A.y * B.x);
    var s = Math.sqrt(g.x * g.x + g.y * g.y + g.z * g.z) / 2;

    document.getElementById('result').innerHTML = s;
}