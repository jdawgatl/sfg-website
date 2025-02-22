
import { Routes, Route } from "react-router-dom";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ClientsSection } from "@/components/admin/sections/ClientsSection";
import { QuotesSection } from "@/components/admin/sections/QuotesSection";
import { PaymentsSection } from "@/components/admin/sections/PaymentsSection";
import { ManualsSection } from "@/components/admin/sections/ManualsSection";

const Admin = () => {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/*" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<ClientsSection />} />
          <Route path="quotes" element={<QuotesSection />} />
          <Route path="payments" element={<PaymentsSection />} />
          <Route path="manuals" element={<ManualsSection />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
};

export default Admin;
