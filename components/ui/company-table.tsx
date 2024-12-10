'use client';

import { Company } from '@/types/company';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { Badge } from './badge';
import { Edit2, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface CompanyTableProps {
  companies: Company[];
}

export function CompanyTable({ companies }: CompanyTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>LOGO</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>GROUP</TableHead>
          <TableHead>VAT NUMBER</TableHead>
          <TableHead>ACTIVE</TableHead>
          <TableHead className="text-right">ACTIONS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow key={company.id}>
            <TableCell>
              <Image
                src={company.logoThumbnailUrl}
                alt={company.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            </TableCell>
            <TableCell className="font-medium">{company.name}</TableCell>
            <TableCell>{company.groupName}</TableCell>
            <TableCell>{company.vatNumber}</TableCell>
            <TableCell>
              <Badge variant={company.active ? 'success' : 'destructive'}>
                {company.active ? 'Active' : 'Inactive'}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}