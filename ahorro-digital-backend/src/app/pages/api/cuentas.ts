
import type { NextApiRequest, NextApiResponse } from 'next';

const cuentas = [
  { id: 1, nombre: 'Clasica', tipo: 'Tradicional', descripcion: 'Tu cuenta de ahorros de siempre', tasa: '2.5% anual' },
  { id: 2, nombre: 'Plus', tipo: 'Digital', descripcion: 'Mejoras en la rentabilidad', tasa: '3.0% anual' },
  { id: 3, nombre: 'Premium', tipo: 'Tradicional', descripcion: 'Beneficios exclusivos y mayor rentabilidad.', tasa: '3.5% anual' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(cuentas);
  }
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}