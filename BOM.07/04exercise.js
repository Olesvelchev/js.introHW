<script>
function removeSelected() {
    var selectElement = document.getElementById('mySelect');
    var selectedIndex = selectElement.selectedIndex;

    if (selectedIndex >= 0) {
        selectElement.remove(selectedIndex);
    }
}
</script>