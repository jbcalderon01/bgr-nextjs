export const APP_MODULES = [
  {
    title: "Nuevo credito",
    path: "/admin/nuevo-credito",
    icon: "/icon-new-credit.png",
  },
  // {
  //   title: "Mis créditos",
  //   path: "/admin/mis-creditos",
  //   icon: "/icon-my-credits.png",
  // },
  {
    title: "Aprobación",
    path: "/admin/aprobacion",
    icon: "/icon-approbations.png",
  },
  {
    title: "Cartera",
    path: "/admin/cartera",
    icon: "/icon-wallet.png",
  },
];

const moduleRender = (index: number) => {
  return `Module ${index}`;
};

for (let i = 0; i < APP_MODULES.length; i++) {
  moduleRender(i);
}
