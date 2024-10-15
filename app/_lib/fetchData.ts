export async function getPayments() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/index.json"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching payments:", error);
    throw error;
  }
}
export async function getPaymentById(id: string) {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/details/${id}.json`
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching payment with id ${id}:`, error);
    throw error;
  }
}
