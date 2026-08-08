document.addEventListener("DOMContentLoaded", () => {
    // 1. Calculadora de Porciones
    const baseIngredients = [
        { name: "fresas grandes (bien lavadas)", qty: 5, unit: "", icon: "🍓" },
        { name: "taza de leche", qty: 1, unit: "", icon: "🥛" },
        { name: "cucharadas de azúcar", qty: 2, unit: "", icon: "🥄" },
        { name: "Hielo al gusto", qty: null, unit: "", icon: "🧊" },
        { name: "(Opcional) un poco de vainilla o crema", qty: null, unit: "", icon: "✨" }
    ];

    const portionSelect = document.getElementById("portions");
    const ingredientsList = document.getElementById("ingredients-list");

    function renderIngredients(factor) {
        ingredientsList.innerHTML = "";
        baseIngredients.forEach(item => {
            const li = document.createElement("li");
            let qtyText = "";
            
            if (item.qty !== null) {
                const totalQty = item.qty * factor;
                qtyText = `<strong>${totalQty}</strong> `;
            }

            li.innerHTML = `
                <label class="check-container">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <span>${item.icon} ${qtyText}${item.name}</span>
                </label>
            `;
            ingredientsList.appendChild(li);
        });
    }

    portionSelect.addEventListener("change", (e) => {
        renderIngredients(parseFloat(e.target.value));
    });

    renderIngredients(1); // Inicializar con 1 porción

    // 2. Botón de Celebración
    const finishBtn = document.getElementById("finish-btn");
    const celebrationMessage = document.getElementById("celebration-message");

    finishBtn.addEventListener("click", () => {
        celebrationMessage.classList.add("show");
        finishBtn.style.transform = "scale(0.95)";
        setTimeout(() => finishBtn.style.transform = "scale(1)", 150);
    });
});