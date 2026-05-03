'use client'
import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const LOCATIONS = [
  {
    name: 'Khulna Office',
    detail: 'Dhaka Trade Centre, Suite No. 1, 11th Floor,<br>99 Kazi Nazrul Islam Avenue, Kawranbazar, Dhaka',
    lat: 23.7512,
    lng: 90.3933,
    phone: '02477721103 | 01874090410',
  },
  {
    name: 'Dhaka Office',
    detail: '08, Old Jessore Road (2nd Floor), Khulna-9100',
    lat: 22.8172,
    lng: 89.546,
    phone: '0255012800 | 01874090420',
  },
  {
    name: 'Factory',
    detail: 'Chara bot tolar more,<br>Khulna-Mongla Highway, Fakirhat, Bagerhat',
    lat: 22.5929,
    lng: 89.7835,
    phone: null,
  },
]

export default function LeafletMap({ activeIdx }) {
  const mapRef = useRef(null)
  const mapObjRef = useRef(null)
  const markersRef = useRef([])
  const makeIconRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current || mapObjRef.current) return

    let cancelled = false

    import('leaflet').then(({ default: L }) => {
      if (cancelled || !mapRef.current) return
      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const makeIcon = (label, active) =>
        L.divIcon({
          className: '',
          html: `<div style="display:flex;flex-direction:column;align-items:center;">
            <div style="
              background:${active ? '#8B5E3C' : '#2A1D14'};
              color:#F6F1EA;
              font-family:'JetBrains Mono',monospace;
              font-size:10px;letter-spacing:0.1em;text-transform:uppercase;
              padding:5px 10px;border-radius:3px;white-space:nowrap;
              box-shadow:0 4px 14px rgba(42,29,20,${active ? '0.5' : '0.3'});
              line-height:1.4;text-align:center;
              border:${active ? '1.5px solid rgba(246,241,234,0.4)' : '1.5px solid transparent'};
              transform:${active ? 'scale(1.08)' : 'scale(1)'};
              transition:all 0.2s;
            ">${label}</div>
            <div style="width:2px;height:10px;background:${active ? '#8B5E3C' : '#2A1D14'};"></div>
            <div style="width:10px;height:10px;background:${active ? '#8B5E3C' : '#2A1D14'};border:2px solid #F6F1EA;border-radius:50%;box-shadow:0 2px 6px rgba(42,29,20,0.4);margin-top:-1px;"></div>
          </div>`,
          iconSize: [120, 50],
          iconAnchor: [60, 50],
        })

      makeIconRef.current = makeIcon

      const markers = []
      LOCATIONS.forEach((loc, i) => {
        const marker = L.marker([loc.lat, loc.lng], {
          icon: makeIcon(loc.name, i === 0),
        }).addTo(map)
        marker.bindPopup(
          `<div style="font-family:'Work Sans',sans-serif;min-width:190px;padding:2px 0;">
            <div style="font-family:'Libre Caslon Text',serif;font-size:14px;font-weight:700;margin-bottom:6px;color:#2A1D14;line-height:1.2;">${loc.name}</div>
            <div style="font-size:12px;color:#6B5847;line-height:1.55;">${loc.detail}</div>
            ${loc.phone ? `<div style="margin-top:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8B5E3C;letter-spacing:0.05em;">${loc.phone}</div>` : ''}
          </div>`,
          { maxWidth: 260, closeButton: false }
        )
        markers.push(marker)
      })

      markersRef.current = markers
      mapObjRef.current = map

      const bounds = LOCATIONS.map((l) => [l.lat, l.lng])
      map.fitBounds(bounds, { padding: [60, 60] })

      setTimeout(() => markers[0].openPopup(), 600)
    })

    return () => {
      cancelled = true
      if (mapObjRef.current) {
        mapObjRef.current.remove()
        mapObjRef.current = null
        markersRef.current = []
      }
    }
  }, [])

  useEffect(() => {
    if (!mapObjRef.current || !makeIconRef.current || !markersRef.current.length) return
    const map = mapObjRef.current
    const makeIcon = makeIconRef.current
    markersRef.current.forEach((m, i) =>
      m.setIcon(makeIcon(LOCATIONS[i].name, i === activeIdx))
    )
    map.setView([LOCATIONS[activeIdx].lat, LOCATIONS[activeIdx].lng], 12, {
      animate: true,
      duration: 0.6,
    })
    setTimeout(() => markersRef.current[activeIdx].openPopup(), 400)
  }, [activeIdx])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
